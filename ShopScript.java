package com.yourname.bedwarsstuff.resourceManagement;

import org.json.JSONObject;
import org.json.JSONTokener;
import org.bukkit.Material;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerInteractEntityEvent;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.entity.Villager;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.ItemFlag;
import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.entity.Entity;
import org.bukkit.ChatColor;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.Map;
import java.util.HashMap;
import java.util.UUID;
import java.util.List;
import java.util.ArrayList;

public class ShopScript implements CommandExecutor, Listener {
    private final JavaPlugin plugin;
    private final JSONObject shopData = new JSONObject();
    private final Map<Inventory, String> inventoryNames = new HashMap<>();

    private final Map<UUID, Long> cooldowns = new HashMap<>();
    private static final long COOLDOWN_TIME = 20;

    public ShopScript(JavaPlugin plugin) {
        this.plugin = plugin;
        plugin.getCommand("shop").setExecutor(this);
        plugin.getServer().getPluginManager().registerEvents(this, plugin);
        loadShopData();
    }

    public static ItemStack setDurability(ItemStack item, int durability) {
        if (item == null || !item.getType().isItem()) return null;

        ItemMeta meta = item.getItemMeta();
        if (meta instanceof Damageable damageable) {
            int maxDurability = item.getType().getMaxDurability();

            // Ensure durability is within bounds
            durability = Math.max(0, Math.min(maxDurability, durability));

            // Set the damage value (inverse of durability)
            damageable.setDamage(maxDurability - durability);
            item.setItemMeta((ItemMeta) damageable);
        }
        return item;
    }

    // Simulate a custom max durability
    public static ItemStack setCustomMaxDurability(ItemStack item, int customMaxDurability, int currentDurability) {
        if (item == null || !item.getType().isItem()) return null;

        // Store custom max durability and current durability as metadata or persistent data
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.getPersistentDataContainer().set(
                new NamespacedKey("yourplugin", "maxDurability"),
                PersistentDataType.INTEGER,
                customMaxDurability
            );
            meta.getPersistentDataContainer().set(
                new NamespacedKey("yourplugin", "currentDurability"),
                PersistentDataType.INTEGER,
                currentDurability
            );
            item.setItemMeta(meta);
        }
        return item;
    }

    // Get custom durability
    public static int getCustomDurability(ItemStack item) {
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            Integer maxDurability = meta.getPersistentDataContainer().get(
                new NamespacedKey("yourplugin", "maxDurability"),
                PersistentDataType.INTEGER
            );
            Integer currentDurability = meta.getPersistentDataContainer().get(
                new NamespacedKey("yourplugin", "currentDurability"),
                PersistentDataType.INTEGER
            );

            // Return current durability if metadata exists
            if (maxDurability != null && currentDurability != null) {
                return currentDurability;
            }
        }
        return -1; // Indicate no custom durability is set
    }

    private void loadShopData() {
        File shopFile = new File(plugin.getDataFolder(), "shops.json");

        if (!plugin.getDataFolder().exists()) {
            plugin.getDataFolder().mkdirs();
        }

        if (!shopFile.exists()) {
            plugin.getLogger().warning("shops.json not found, creating default.");
            try {
                InputStream inputStream = plugin.getResource("shops.json");
                if (inputStream != null) {
                    Files.copy(inputStream, shopFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
                } else {
                    createDefaultShopFile(shopFile);
                }
            } catch (IOException e) {
                plugin.getLogger().warning("Error creating shops.json: " + e.getMessage());
                e.printStackTrace();
            }
        }

        try (FileReader reader = new FileReader(shopFile)) {
            JSONTokener tokener = new JSONTokener(reader);
            JSONObject jsonObject = new JSONObject(tokener);
            shopData.clear();
            for (String key : jsonObject.keySet()) {
                shopData.put(key, jsonObject.get(key));
            }
        } catch (Exception e) {
            plugin.getLogger().warning("Error loading shops.json: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private void createDefaultShopFile(File shopFile) {
        try {
            JSONObject defaultShopData = new JSONObject();
            JSONObject itemShop = new JSONObject();
            itemShop.put("name", "Item Shop");
            itemShop.put("rows", 3);

            JSONObject slots = new JSONObject();
            JSONObject item1 = new JSONObject();
            item1.put("item", "WOODEN_SWORD");
            item1.put("cost", 10);
            item1.put("costItem", "IRON_INGOT");
            item1.put("itemAmount", 1);
            item1.put("name", "§6Iron Sword");
            item1.put("lore", new String[] {"§7A stronger sword", "§eA must-have for combat."});

            slots.put("1", item1);
            itemShop.put("slots", slots);
            defaultShopData.put("itemShop", itemShop);

            try (FileWriter writer = new FileWriter(shopFile)) {
                writer.write(defaultShopData.toString(4));
            }
        } catch (IOException e) {
            plugin.getLogger().warning("Error creating default shops.json: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void openShopInventory(Player player, String shopName) {
        JSONObject shop = shopData.optJSONObject(shopName);
        if (shop == null) {
            player.sendMessage("Shop not found!");
            return;
        }

        String shopDisplayName = shop.optString("name");
        int rows = shop.optInt("rows", 3);
        Inventory shopInventory = plugin.getServer().createInventory(player, rows * 9, shopDisplayName);

        JSONObject slots = shop.optJSONObject("slots");
        if (slots != null) {
            for (String slotKey : slots.keySet()) {
                int slot = Integer.parseInt(slotKey) - 1;
                JSONObject itemData = slots.optJSONObject(slotKey);

                String itemType = itemData.optString("item");
                int itemAmount = itemData.optInt("itemAmount", 1);
                String title = itemData.optString("name", "Default Title");
                List<String> lore = new ArrayList<>();
                // Convert JSON Array to List<String>
                if (itemData.has("lore")) {
                    for (Object obj : itemData.optJSONArray("lore")) {
                        if (obj instanceof String) {
                            lore.add(ChatColor.translateAlternateColorCodes('&', (String) obj));
                        }
                    }
                }

                ItemStack itemStack = new ItemStack(Material.valueOf(itemType), itemAmount);
                ItemMeta itemMeta = itemStack.getItemMeta();

                // Apply title and lore
                itemMeta.setDisplayName(ChatColor.translateAlternateColorCodes('&', title));
                itemMeta.setLore(lore);

                // Apply item flags to hide name and lore if needed
                itemMeta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES);

                itemStack.setItemMeta(itemMeta);

                shopInventory.setItem(slot, itemStack);
            }
        }

        inventoryNames.put(shopInventory, shopName);

        player.openInventory(shopInventory);
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (label.equalsIgnoreCase("shop")) {
            if (sender instanceof Player) {
                Player player = (Player) sender;
                if (args.length > 0) {
                    openShopInventory(player, args[0]);
                    return true;
                }
            }
        } else if (label.equalsIgnoreCase("reloadshops")) {
            loadShopData();
            sender.sendMessage("Shops reloaded!");
            return true;
        }
        return false;
    }

    @EventHandler
    public void onInventoryClick(InventoryClickEvent event) {
        Player player = (Player) event.getWhoClicked();
        Inventory inventory = event.getInventory();

        String inventoryName = inventoryNames.get(inventory);
        if (inventoryName == null) return;

        UUID playerId = player.getUniqueId();
        long currentTime = System.currentTimeMillis();

        // Cooldown logic
        if (cooldowns.containsKey(playerId)) {
            long lastClickTime = cooldowns.get(playerId);
            if ((currentTime - lastClickTime) < COOLDOWN_TIME) {
                event.setCancelled(true);
                return;
            }
        }

        cooldowns.put(playerId, currentTime);

        event.setCancelled(true);

        ItemStack clickedItem = event.getCurrentItem();
        if (clickedItem == null || clickedItem.getType() == Material.AIR) return;

        int clickedSlot = event.getSlot() + 1;

        JSONObject shop = shopData.optJSONObject(inventoryName);
        if (shop == null) return;

        JSONObject slots = shop.optJSONObject("slots");
        if (slots == null) return;

        JSONObject itemData = slots.optJSONObject(String.valueOf(clickedSlot));
        if (itemData == null) return;

        String itemType = itemData.optString("item");
        int cost = itemData.optInt("cost");
        String costItem = itemData.optString("costItem");
        int itemAmount = itemData.optInt("itemAmount", 1);

        if (itemData.has("open")) {
            openShopInventory(player, itemData.getString("open"));
            return;
        }

        if (itemData.has("cancelEvent")) {
            event.setCancelled(true);
            return;
        }

        Material costMaterial = Material.getMaterial(costItem);
        if (costMaterial == null || !player.getInventory().containsAtLeast(new ItemStack(costMaterial), cost)) {
            player.sendMessage("You don't have enough resources!");
            return;
        }

        player.getInventory().removeItem(new ItemStack(costMaterial, cost));
        if (itemData.has("uses")) {
            int uses = itemData.optInt("uses");

            ItemStack customItem = new ItemStack(Material.valueOf(itemType), itemAmount);
            customItem = setCustomMaxDurability(customItem, uses, uses);
            player.getInventory().addItem(customItem);
        } else {
            player.getInventory().addItem(new ItemStack(Material.valueOf(itemType), itemAmount));
        }
        player.sendMessage("§aPurchased!");
    }

    @EventHandler
    public void onVillagerInteract(PlayerInteractEntityEvent event) {
        Player player = event.getPlayer();
        Entity entity = event.getRightClicked();

        if (entity instanceof Villager villager) {
            if (villager.getScoreboardTags().contains("itemShop")) {
                openShopInventory(player, "itemShop");
                event.setCancelled(true);
            } else if (villager.getScoreboardTags().contains("upgradeShop")) {
                openShopInventory(player, "upgradeShop");
                event.setCancelled(true);
            }
        }
    }
}

package com.yourname.bedwarsstuff.resourceManagement;

import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.entity.Item;
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.java.JavaPlugin;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class GeneratorsScript implements CommandExecutor {
    private Boolean canSpawn = true;
    private final JavaPlugin plugin;
    private final Map<String, Generator> generators = new HashMap<>();
    private final Map<String, Integer> generatorLevels = new HashMap<>();

    public GeneratorsScript(JavaPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (command.getName().equalsIgnoreCase("loadmap")) {
            if (!(sender instanceof Player)) {
                sender.sendMessage("This command can only be run by players.");
                return true;
            }

            Player player = (Player) sender;
            if (!player.hasPermission("bedwars.command.loadmap")) {
                player.sendMessage("You do not have permission to use this command.");
                return true;
            }

            if (args.length < 1) {
                player.sendMessage("Usage: /loadmap <mapName>");
                return true;
            }

            String mapName = args[0];
            if (Bukkit.getWorld(mapName) == null) {
                player.sendMessage("The map '" + mapName + "' does not exist or is not loaded.");
                return true;
            }

            initGenerators();
            player.sendMessage("Map '" + mapName + "' loaded and generators initialized.");
            return true;
        }

        if (command.getName().equalsIgnoreCase("togglegens")) {
            return toggleGenerators(args);
        }

        if (command.getName().equalsIgnoreCase("upgradegen")) {
            if (args.length < 2) {
                sender.sendMessage("Usage: /upgradegen <generatorKey> <speed|quantity> <value>");
                return true;
            }

            String generatorKey = args[0];
            String upgradeType = args[1];
            int value = 0;

            try {
                value = Integer.parseInt(args[2]);
            } catch (NumberFormatException e) {
                sender.sendMessage("The value must be a valid number.");
                return true;
            }

            if (upgradeType.equalsIgnoreCase("speed")) {
                upgradeGeneratorSpeed(sender, generatorKey, value);
            } else if (upgradeType.equalsIgnoreCase("quantity")) {
                upgradeGeneratorQuantity(sender, generatorKey, value);
            } else {
                sender.sendMessage("Invalid upgrade type. Use 'speed' or 'quantity'.");
            }
            return true;
        }

        return false;
    }

    public void initGenerators() {
        File file = new File(plugin.getDataFolder(), "generators.json");

        if (!file.exists()) {
            plugin.getLogger().severe("Could not find generators.json at: " + file.getPath());
            return;
        }

        try (InputStream input = new FileInputStream(file)) {
            JSONObject json = new JSONObject(new JSONTokener(input));
            JSONArray maps = json.optJSONArray("maps");

            if (maps == null) {
                plugin.getLogger().severe("The 'maps' array is missing or invalid in generators.json.");
                return;
            }

            for (int i = 0; i < maps.length(); i++) {
                JSONObject map = maps.optJSONObject(i);
                if (map == null) continue;

                String worldName = map.optString("world", null);
                if (worldName == null) {
                    plugin.getLogger().warning("A map entry is missing the 'world' field.");
                    continue;
                }

                JSONArray gens = map.optJSONArray("generators");
                if (gens == null) {
                    plugin.getLogger().warning("No generators found for world: " + worldName);
                    continue;
                }

                for (int j = 0; j < gens.length(); j++) {
                    JSONObject gen = gens.optJSONObject(j);
                    if (gen == null) continue;

                    String id = gen.optString("id", "gen" + j);
                    String material = gen.optString("material", null);
                    int interval = gen.optInt("interval", -1);
                    int amount = gen.optInt("amount", -1);

                    JSONObject locationObj = gen.optJSONObject("location");
                    if (locationObj == null) {
                        plugin.getLogger().warning("Generator at index " + j + " in world " + worldName + " is missing the location object.");
                        continue;
                    }

                    double x = locationObj.optDouble("x", Double.NaN);
                    double y = locationObj.optDouble("y", Double.NaN);
                    double z = locationObj.optDouble("z", Double.NaN);

                    if (Double.isNaN(x) || Double.isNaN(y) || Double.isNaN(z)) {
                        plugin.getLogger().warning("Invalid location coordinates for generator at index " + j + " in world " + worldName);
                        continue;
                    }

                    World world = Bukkit.getWorld(worldName);
                    if (world == null) {
                        plugin.getLogger().warning("World " + worldName + " not found for generator at index " + j);
                        continue;
                    }

                    Material materialEnum;
                    try {
                        materialEnum = Material.valueOf(material);
                    } catch (IllegalArgumentException e) {
                        plugin.getLogger().warning("Invalid material: " + material + " for generator at index " + j);
                        continue;
                    }

                    if (interval <= 0 || amount <= 0) {
                        plugin.getLogger().warning("Invalid interval or amount for generator at index " + j + " in world " + worldName);
                        continue;
                    }

                    Location location = new Location(world, x, y, z);
                    String generatorKey = worldName + ":" + id;

                    generators.put(generatorKey, new Generator(location, materialEnum, interval, amount));
                    generatorLevels.put(generatorKey, 0); // Initialize with level 0
                    plugin.getLogger().info("Loaded generator: " + generatorKey + " spawning " + amount + " " + materialEnum + " every " + interval + " seconds.");
                }
            }

            if (!generators.isEmpty()) {
                startGenerators();
            } else {
                plugin.getLogger().warning("No valid generators were loaded from generators.json.");
            }

        } catch (IOException e) {
            plugin.getLogger().severe("Error loading generators.json from " + file.getPath() + ": " + e.getMessage());
        } catch (Exception e) {
            plugin.getLogger().severe("Unexpected error while parsing generators.json: " + e.getMessage());
        }
    }

    private void startGenerators() {
        for (Map.Entry<String, Generator> entry : generators.entrySet()) {
            String generatorKey = entry.getKey();
            scheduleGenerator(generatorKey);
        }
        plugin.getLogger().info("Started " + generators.size() + " generators.");
    }

    private void scheduleGenerator(String generatorKey) {
        Generator generator = generators.get(generatorKey);
        Bukkit.getScheduler().runTaskTimer(plugin, () -> generator.spawn(generatorLevels.get(generatorKey)), generator.getInterval() * 20L, generator.getInterval() * 20L);
        plugin.getLogger().info("Scheduled generator: " + generatorKey);
    }

    private void upgradeGeneratorSpeed(CommandSender sender, String generatorKey, int seconds) {
        if (!generators.containsKey(generatorKey)) {
            sender.sendMessage("Generator not found: " + generatorKey);
            return;
        }

        Generator generator = generators.get(generatorKey);
        int currentInterval = generator.getInterval();
        if (currentInterval - seconds < 1) {
            sender.sendMessage("Cannot reduce the interval below 1 second.");
            return;
        }

        generator.setInterval(currentInterval - seconds);
        sender.sendMessage("Reduced the generator's spawn interval for " + generatorKey + " by " + seconds + " seconds.");
        scheduleGenerator(generatorKey); // Re-schedule with updated interval
    }

    private void upgradeGeneratorQuantity(CommandSender sender, String generatorKey, int quantity) {
        if (!generators.containsKey(generatorKey)) {
            sender.sendMessage("Generator not found: " + generatorKey);
            return;
        }

        Generator generator = generators.get(generatorKey);
        generator.addAmount(quantity);
        sender.sendMessage("Increased the generator's spawn amount for " + generatorKey + " by " + quantity + ".");
        scheduleGenerator(generatorKey); // Re-schedule with updated amount
    }

    private boolean toggleGenerators(String[] args) {
        if (args.length == 1 && args[0].equalsIgnoreCase("off")) {
            canSpawn = false;
            Bukkit.broadcastMessage("Generators have been disabled.");
            return true;
        } else if (args.length == 1 && args[0].equalsIgnoreCase("on")) {
            canSpawn = true;
            Bukkit.broadcastMessage("Generators have been enabled.");
            return true;
        } else {
            return false;
        }
    }

    private static class Generator {
        private Location location;
        private Material material;
        private int interval;
        private int amount;

        public Generator(Location location, Material material, int interval, int amount) {
            this.location = location;
            this.material = material;
            this.interval = interval;
            this.amount = amount;
        }

        public Location getLocation() {
            return location;
        }

        public Material getMaterial() {
            return material;
        }

        public int getInterval() {
            return interval;
        }

        public void setInterval(int interval) {
            this.interval = interval;
        }

        public int getAmount() {
            return amount;
        }

        public void addAmount(int quantity) {
            this.amount += quantity;
        }

        public void spawn(int level) {
            if (level <= 0) return;
            Location spawnLocation = location.clone();
            spawnLocation.getWorld().dropItemNaturally(spawnLocation, new ItemStack(material, amount));
        }
    }
}

package com.yourname.bedwarsstuff.teamManagement;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.block.Block;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.entity.PlayerDeathEvent;
import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.scoreboard.Team;
import org.bukkit.scoreboard.Objective;

import java.util.*;

public class BedBrokenNotifier extends ScoreboardThing implements CommandExecutor, Listener {

    private final Map<String, Boolean> bedStatus = new HashMap<>();
    private final Map<String, List<Player>> teamPlayers = new HashMap<>();
    private final List<String> availableTeams = Arrays.asList("red", "blue", "green", "yellow", "aqua", "white", "pink", "gray");
    private List<String> lastLifePlayers = new ArrayList<>();
    private List<String> permaDeadPlayers = new ArrayList<>();
    private boolean gameStarted = false;

    public BedBrokenNotifier(JavaPlugin plugin) {
        super(plugin);
        resetGame();
        TeamSpawnStuff.initialize(plugin);
    }

    private void setupTeams() {
        for (String teamName : availableTeams) {
            Team team = registerTeam(teamName);
            if (team != null) {
                team.setPrefix(getColorForTeam(teamName) + "[" + capitalizeFirstLetter(teamName) + "] ");
                team.setOption(Team.Option.NAME_TAG_VISIBILITY, Team.OptionStatus.ALWAYS);
                team.setOption(Team.Option.COLLISION_RULE, Team.OptionStatus.NEVER);
                teamPlayers.put(teamName, new ArrayList<>());
            }
        }
    }

    @EventHandler
    public void onBlockBreak(BlockBreakEvent event) {
        Block block = event.getBlock();
        if (block.getType().name().endsWith("_BED")) {
            String team = block.getType().name().replace("_BED", "").toLowerCase();

            // Map cyan to aqua
            if (team.equals("cyan")) {
                team = "aqua";
            }

            if (bedStatus.containsKey(team) && bedStatus.get(team)) {
                // Immediately mark the bed as broken and display warning
                bedStatus.put(team, false);
                notifyTeamBedBroken(team);
                updateTeamSymbolToWarning(team); // Add the warning symbol to the team immediately
                Bukkit.broadcastMessage(ChatColor.RED + "The bed of the " + getColorForTeam(team) +
                        capitalizeFirstLetter(team) + ChatColor.RED + " team has been destroyed!");
                checkForRemainingTeams();
            }
        }
    }

    public void notifyTeamBedBroken(String team) {
        // Refresh scoreboard order and status
        updateScoreboard();

        List<Player> players = teamPlayers.getOrDefault(team, Collections.emptyList());
        players.forEach(player -> {
            player.sendTitle(ChatColor.RED + "BED BROKEN!", ChatColor.YELLOW + "Stay alive!", 10, 70, 20);
            player.sendMessage(ChatColor.RED + "Your team's bed has been destroyed!");
        });
    }

    @EventHandler
    public void onPlayerDeath(PlayerDeathEvent event) {
        Player player = event.getEntity();
        String team = getTeamForPlayer(player); // Using the new getTeamForPlayer method

        if (team != null && !bedStatus.get(team)) {
            if (!lastLifePlayers.contains(player.getName())) {
                lastLifePlayers.add(player.getName());
                checkIfAllPlayersAreDead(team);
            }
        }
    }

    private void checkIfAllPlayersAreDead(String team) {
        List<Player> players = teamPlayers.getOrDefault(team, Collections.emptyList());
        boolean allDead = players.stream().allMatch(player -> permaDeadPlayers.contains(player.getName()) || !player.isOnline());

        if (allDead) {
            bedStatus.put(team, false); // Mark the team as completely out
            updateScoreboard();
            notifyTeamElimination(team);
        }
    }

    private void updateTeamSymbolToWarning(String team) {
        // Update the team symbol to a warning (bed broken)
        Team scoreboardTeam = getScoreboard().getTeam(team);
        if (scoreboardTeam != null) {
            scoreboardTeam.setSuffix(ChatColor.YELLOW + "❌");
        }
    }

    private void notifyTeamElimination(String team) {
        // Update the team symbol to a red X when all players are dead
        Team scoreboardTeam = getScoreboard().getTeam(team);
        if (scoreboardTeam != null) {
            scoreboardTeam.setSuffix(ChatColor.RED + "⚠️");
        }
        Bukkit.broadcastMessage(ChatColor.RED + "All players of the " + getColorForTeam(team) +
                capitalizeFirstLetter(team) + ChatColor.RED + " team have been eliminated!");
    }

    private void checkForRemainingTeams() {
        long remainingTeams = bedStatus.entrySet().stream()
                .filter(entry -> entry.getValue() || !teamPlayers.getOrDefault(entry.getKey(), Collections.emptyList()).isEmpty())
                .count();
        if (remainingTeams <= 1) announceWinner();
    }

    private void announceWinner() {
        String winningTeam = bedStatus.entrySet().stream()
                .filter(entry -> entry.getValue() && !teamPlayers.getOrDefault(entry.getKey(), Collections.emptyList()).isEmpty())
                .map(Map.Entry::getKey)
                .findFirst().orElse(null);

        if (winningTeam != null) {
            Bukkit.broadcastMessage(ChatColor.GOLD + "The " + getColorForTeam(winningTeam) +
                    capitalizeFirstLetter(winningTeam) + ChatColor.GOLD + " team has won the game!");
        } else {
            Bukkit.broadcastMessage(ChatColor.RED + "It's a draw! No team survived.");
        }
        resetGame();
    }

    public String assignPlayerToTeam(Player player) {
        if (gameStarted) {
            player.sendMessage(ChatColor.RED + "The game has already started.");
            return "";
        }
        for (String teamName : availableTeams) {
            List<Player> players = teamPlayers.get(teamName);
            if (players.size() < 1) {
                players.add(player);
                Team team = getScoreboard().getTeam(teamName);
                if (team != null) team.addEntry(player.getName());
                player.setScoreboard(getScoreboard());
                player.sendMessage(ChatColor.GREEN + "You have joined the " + getColorForTeam(teamName) +
                        capitalizeFirstLetter(teamName) + ChatColor.GREEN + " team.");
                return teamName;
            }
        }
        player.sendMessage(ChatColor.RED + "No available teams to join.");
        
        return "";
    }

    public void startGame() {
        if (gameStarted) {
            Bukkit.broadcastMessage(ChatColor.RED + "Game already in progress!");
            return;
        }

        for (Player player : Bukkit.getOnlinePlayers()) {
            String playerTeam = assignPlayerToTeam(player);
            TeamSpawnStuff.sendToSpawn(player, playerTeam);
        }

        gameStarted = true;
        Bukkit.broadcastMessage(ChatColor.GOLD + "The game has started!");
        updateScoreboard(); // Setup initial scoreboard
        Bukkit.broadcastMessage(ChatColor.GREEN + "The scoreboard has been set up and assigned to all players.");
    }

    public void resetGame() {
        // Clear the scoreboard
        getScoreboard().getEntries().forEach(entry -> getScoreboard().resetScores(entry));
        Objective objective = getScoreboard().getObjective("main");
        if (objective != null) {
            objective.unregister(); // Remove the objective completely
        }
    
        // Reset game state
        bedStatus.clear();
        teamPlayers.clear();
        availableTeams.forEach(team -> {
            bedStatus.put(team, true);
            teamPlayers.put(team, new ArrayList<>());
        });
        lastLifePlayers.clear();
        permaDeadPlayers.clear();
        setupTeams();
    
        gameStarted = false;
        Bukkit.broadcastMessage(ChatColor.GREEN + "Game has been reset!");
    }

    public String getTeamForPlayer(Player player) {
        for (Map.Entry<String, List<Player>> entry : teamPlayers.entrySet()) {
            if (entry.getValue().contains(player)) {
                return entry.getKey();
            }
        }
        return null;  // Player is not assigned to any team
    }    

    private void updateScoreboard() {
        Objective objective = getScoreboard().getObjective("main");
        if (objective == null) {
            setupObjective("Bedwars");
            objective = getScoreboard().getObjective("main");
        }

        // Clear and re-add all entries in the correct order
        getScoreboard().getEntries().forEach(entry -> getScoreboard().resetScores(entry));
        for (int i = 0; i < availableTeams.size(); i++) {
            String team = availableTeams.get(i);
            String status = bedStatus.get(team) ? ChatColor.GREEN + "✔" : ChatColor.RED + "X";
            String displayText = getColorForTeam(team) + capitalizeFirstLetter(team) + " " + status;
            objective.getScore(displayText).setScore(availableTeams.size() - i); // Maintain consistent ordering
        }
    }

    private ChatColor getColorForTeam(String team) {
        switch (team.toLowerCase()) {
            case "red": return ChatColor.RED;
            case "blue": return ChatColor.BLUE;
            case "green": return ChatColor.GREEN;
            case "yellow": return ChatColor.YELLOW;
            case "aqua": return ChatColor.AQUA;
            case "white": return ChatColor.WHITE;
            case "pink": return ChatColor.LIGHT_PURPLE;
            case "gray": return ChatColor.GRAY;
            default: return ChatColor.WHITE;
        }
    }

    private String capitalizeFirstLetter(String team) {
        return team.substring(0, 1).toUpperCase() + team.substring(1);
    }
    
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (label.equalsIgnoreCase("startgame")) { // Using equalsIgnoreCase for case-insensitivity
            startGame();
            return true;
        } else if (label.equalsIgnoreCase("resetgame")) {
            resetGame();
            return true;
        }
        return false;
    }
}

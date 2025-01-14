export const characterData = {
  gargoyleBlue: {
    name: "Blue Gargoyle",
    stats: [
      {
        name: "AC",
        base: 12,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Hit Points",
        base: 12,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Strength",
        base: 12,
        modifier: +2,
        modifierDescription: "Initial +2",
      },
      {
        name: "Dexterity",
        base: 8,
        modifier: -1,
        modifierDescription: "Initial -1",
      },
      {
        name: "Constitution",
        base: 14,
        modifier: +3,
        modifierDescription: "Initial +2, Racial +1",
      },
      {
        name: "Intelligence",
        base: 6,
        modifier: -2,
        modifierDescription: "Initial -2",
      },
      {
        name: "Wisdom",
        base: 10,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Charisma",
        base: 6,
        modifier: -2,
        modifierDescription: "Initial -2",
      },
    ],
    resourceType: "Mana",
    resourceSlots: 5,
    racials: [
      { name: "+2 Constitution", icon: "mdi-shield-plus" },
      { name: "Stone Resilience", icon: "mdi-rock" },
    ],
    vulnerabilities: [
      { name: "Cold Damage", icon: "mdi-snowflake" },
      { name: "Radiant Damage", icon: "mdi-white-balance-sunny" },
    ],
    abilities: [
      // 1) Basic Attack (unchanged)
      {
        name: "Claw Attack",
        effect: "Hit target for 1d8",
        icon: "mdi-hand-back-right",
        color: "text-gray-700",
        isBasic: true,
      },
      // 2) Turn Stone Skin into a team or single-target ally buff
      {
        name: "Stone Bulwark",
        effect: "Grant +4 AC to an ally (or self) for 1 turn",
        icon: "mdi-shield",
        color: "text-gray-500",
      },
      // 3) Keep Winged Slash as an individual big hit
      {
        name: "Winged Slash",
        effect: "Hit target for 2d6",
        icon: "mdi-sword",
        color: "text-red-500",
      },
      // 4) Frost Breath can remain AoE crowd control (team-friendly)
      {
        name: "Frost Breath",
        effect: "Freeze all enemies for 1 turn",
        icon: "mdi-snowflake",
        color: "text-blue-500",
      },
      // 5) Turn Blizzard Blast into a team damage buff
      {
        name: "Blizzard Bond",
        effect: "All allies deal an extra 1d4 cold damage on their next attack",
        icon: "mdi-weather-snowy",
        color: "text-blue-300",
      },
      // 6) Frozen Barrier -> protect an ally, not just self
      {
        name: "Frozen Barrier",
        effect:
          "Give an ally +3 AC and block all melee attacks against them this turn",
        icon: "mdi-snowflake-alert",
        color: "text-blue-600",
      },
      // 7) Keep Shattering Strike as a strong individual finishing move
      {
        name: "Shattering Strike",
        effect: "Hit target for 3d4, ignoring AC bonuses",
        icon: "mdi-ice-pop",
        color: "text-indigo-500",
      },
      // 8) Chill Surge -> expand it to benefit the team
      {
        name: "Chill Surge",
        effect:
          "Deal 1d6 cold damage to all enemies. Each ally may choose 1 target to also take +1d4 cold damage.",
        icon: "mdi-waveform",
        color: "text-sky-400",
      },
    ],
    avatar: "",
  },
  direWolfOrange: {
    name: "Orange Dire Wolf",
    stats: [
      {
        name: "AC",
        base: 12,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Hit Points",
        base: 10,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Strength",
        base: 14,
        modifier: +3,
        modifierDescription: "Initial +2, Racial +1",
      },
      {
        name: "Dexterity",
        base: 14,
        modifier: +2,
        modifierDescription: "Initial +2",
      },
      {
        name: "Constitution",
        base: 12,
        modifier: +1,
        modifierDescription: "Initial +1",
      },
      {
        name: "Intelligence",
        base: 6,
        modifier: -2,
        modifierDescription: "Initial -2",
      },
      {
        name: "Wisdom",
        base: 10,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Charisma",
        base: 8,
        modifier: -1,
        modifierDescription: "Initial -1",
      },
    ],
    resourceType: "Energy",
    resourceSlots: 4,
    racials: [
      { name: "+2 Strength", icon: "mdi-paw" },
      {
        name: "Pack Tactics: Advantage on attack rolls when an ally is within 5 feet",
        icon: "mdi-account-group",
      },
    ],
    vulnerabilities: [{ name: "Fire Damage", icon: "mdi-fire" }],
    abilities: [
      // 1) Basic Attack (unchanged)
      {
        name: "Bite",
        effect: "Hit target for 1d6",
        icon: "mdi-tooth-outline",
        color: "text-gray-700",
        isBasic: true,
      },
      // 2) Keep Pack Tactics but make it even more synergy-based
      {
        name: "Pack Tactics",
        effect:
          "If you or an ally is attacking the same target within 5 feet, you both gain +2 on the attack roll",
        icon: "mdi-paw",
        color: "text-orange-500",
      },
      // 3) Savage Bite (individual big attack)
      {
        name: "Savage Bite",
        effect: "Hit target for 2d8",
        icon: "mdi-tooth",
        color: "text-red-600",
      },
      // 4) Lava Roar -> add synergy
      {
        name: "Lava Roar",
        effect:
          "Deal 1d4 fire damage to all enemies; allies deal +1 fire damage on their next attack",
        icon: "mdi-fire",
        color: "text-red-500",
      },
      // 5) Molten Claw -> add chance for an ally follow-up
      {
        name: "Molten Claw",
        effect:
          "Hit target for 1d6 fire and apply burn (1d4/turn). One ally within 5 feet can make a basic attack as a reaction.",
        icon: "mdi-fire-alert",
        color: "text-orange-600",
      },
      // 6) Flame Leap -> synergy-based movement
      {
        name: "Flame Leap",
        effect:
          "Hit up to 2 targets for 1d6 each. Allies within 10 feet may move 5 feet for free.",
        icon: "mdi-run-fast",
        color: "text-amber-500",
      },
      // 7) Burning Slash (individual)
      {
        name: "Burning Slash",
        effect: "Hit target for 3d4",
        icon: "mdi-flash",
        color: "text-yellow-600",
      },
      // 8) Inferno Rush -> synergy with allies
      {
        name: "Inferno Rush",
        effect:
          "Deal 1d6 to all enemies and push them back 5 feet. Allies may choose to follow or remain in place.",
        icon: "mdi-arrow-expand",
        color: "text-red-700",
      },
    ],
    avatar: "",
  },
  shadowhoofMystic: {
    name: "Shadowhoof Mystic",
    stats: [
      {
        name: "AC",
        base: 11,
        modifier: +2,
        modifierDescription: "Initial +2 from Dexterity",
      },
      {
        name: "Hit Points",
        base: 10,
        modifier: +1,
        modifierDescription: "Initial +1 from Constitution",
      },
      {
        name: "Strength",
        base: 10,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Dexterity",
        base: 14,
        modifier: +2,
        modifierDescription: "Initial +2",
      },
      {
        name: "Constitution",
        base: 12,
        modifier: +1,
        modifierDescription: "Initial +1",
      },
      {
        name: "Intelligence",
        base: 14,
        modifier: +3,
        modifierDescription: "Initial +2, Racial +1",
      },
      {
        name: "Wisdom",
        base: 13,
        modifier: +2,
        modifierDescription: "Initial +1, Racial +1",
      },
      {
        name: "Charisma",
        base: 8,
        modifier: -1,
        modifierDescription: "Initial -1",
      },
    ],
    resourceType: "Mana",
    resourceSlots: 6,
    racials: [
      { name: "+1 Intelligence", icon: "mdi-book-open-variant" },
      { name: "+1 Wisdom", icon: "mdi-eye" },
      {
        name: "Shadow Step: Can teleport in dim light or darkness",
        icon: "mdi-lightbulb-off",
      },
    ],
    vulnerabilities: [
      { name: "Radiant Damage", icon: "mdi-white-balance-sunny" },
    ],
    abilities: [
      // 1) Basic Attack (unchanged)
      {
        name: "Hoof Strike",
        effect: "Hit target for 1d4 bludgeoning damage",
        icon: "mdi-horseshoe",
        color: "text-brown-500",
        isBasic: true,
      },
      // 2) Shadow Bolt (keep as individual)
      {
        name: "Shadow Bolt",
        effect: "Hit target for 2d6 shadow damage",
        icon: "mdi-weather-night",
        color: "text-purple-500",
      },
      // 3) Ethereal Grasp (keep as individual CC)
      {
        name: "Ethereal Grasp",
        effect: "Reduce target's movement to 0 for 1 turn",
        icon: "mdi-hand",
        color: "text-gray-600",
      },
      // 4) Dark Pact -> allow ally usage
      {
        name: "Dark Pact",
        effect: "You or an ally restore 1d4 mana, caster loses 2 HP",
        icon: "mdi-heart-broken",
        color: "text-red-500",
      },
      // 5) Shadow Veil -> spread to an ally
      {
        name: "Shadow Veil",
        effect: "Grant +2 AC to an ally for 1 turn (or yourself)",
        icon: "mdi-cloak",
        color: "text-black",
      },
      // 6) Curse of Weakness (individual debuff)
      {
        name: "Curse of Weakness",
        effect: "Lower target's Strength by 1d4 until end of their next turn",
        icon: "mdi-skull",
        color: "text-green-500",
      },
      // 7) Soul Drain -> add an ally shield/heal choice
      {
        name: "Soul Drain",
        effect:
          "Hit target for 1d6 shadow damage. You may heal yourself for that amount or shield an ally for the same amount this turn.",
        icon: "mdi-spa",
        color: "text-blue-500",
      },
      // 8) Replace Void Step with a new synergy spell
      {
        name: "Umbral Beacon",
        effect:
          "All allies within 15 feet deal +1d4 shadow damage on their next attack",
        icon: "mdi-lan",
        color: "text-indigo-500",
      },
    ],
    avatar: "",
  },
  shieldedSentinel: {
    name: "Shielded Sentinel",
    stats: [
      {
        name: "AC",
        base: 14,
        modifier: +2,
        modifierDescription: "Initial +2 from shield",
      },
      {
        name: "Hit Points",
        base: 14,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Strength",
        base: 12,
        modifier: +2,
        modifierDescription: "Initial +2",
      },
      {
        name: "Dexterity",
        base: 10,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
      {
        name: "Constitution",
        base: 12,
        modifier: +2,
        modifierDescription: "Initial +2",
      },
      {
        name: "Intelligence",
        base: 8,
        modifier: -1,
        modifierDescription: "Initial -1",
      },
      {
        name: "Wisdom",
        base: 12,
        modifier: +1,
        modifierDescription: "Initial +1",
      },
      {
        name: "Charisma",
        base: 10,
        modifier: 0,
        modifierDescription: "", // No meaningful modifier
      },
    ],
    resourceType: "Stamina",
    resourceSlots: 4, // Represents stamina points for defensive maneuvers
    racials: [
      { name: "+2 Strength", icon: "mdi-arm-flex" },
      { name: "+1 Constitution", icon: "mdi-shield-plus" },
      {
        name: "Defender's Instinct: Gain +1 AC when adjacent to allies",
        icon: "mdi-shield-account",
      },
    ],
    vulnerabilities: [{ name: "Psychic Damage", icon: "mdi-brain" }],
    abilities: [
      // 1) Basic Attack (unchanged)
      {
        name: "Sword Slash",
        effect: "Hit target for 1d8 slashing damage",
        icon: "mdi-sword",
        color: "text-gray-700",
        isBasic: true,
      },
      // 2) Shield Bash (individual)
      {
        name: "Shield Bash",
        effect: "Stun target for 1 turn",
        icon: "mdi-shield",
        color: "text-yellow-600",
      },
      // 3) Defensive Stance -> make it a formation (team)
      {
        name: "Protective Formation",
        effect: "You and one adjacent ally each gain +2 AC for 1 turn",
        icon: "mdi-shield-account",
        color: "text-blue-500",
      },
      // 4) Smite Evil (individual)
      {
        name: "Smite Evil",
        effect: "Hit target for 2d6 radiant damage",
        icon: "mdi-white-balance-sunny",
        color: "text-orange-500",
      },
      // 5) Shield Wall -> now covers allies
      {
        name: "Shield Wall",
        effect:
          "Block all melee damage to you and allies behind you for 1 turn",
        icon: "mdi-shield-plus",
        color: "text-gray-500",
      },
      // 6) Taunt (already helps allies)
      {
        name: "Taunt",
        effect: "Force all enemies to attack only you for 1 turn",
        icon: "mdi-account-voice",
        color: "text-red-500",
      },
      // 7) Sacred Strike (individual)
      {
        name: "Sacred Strike",
        effect: "Hit target for 1d8 and restore 1 stamina point",
        icon: "mdi-sword-cross",
        color: "text-purple-500",
      },
      // 8) Bulwark of Faith (team)
      {
        name: "Bulwark of Faith",
        effect: "Allies within 10 feet gain +2 AC for 1 turn",
        icon: "mdi-shield-star",
        color: "text-green-500",
      },
    ],
    avatar: "",
  },
};

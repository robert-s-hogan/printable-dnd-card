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
      {
        name: "Cold Damage",
        icon: "mdi-snowflake",
        description: "Take 1d4 additional damage.",
      },
      {
        name: "Radiant Damage",
        icon: "mdi-white-balance-sunny",
        description: "Take 1d4 additional damage.",
      },
    ],

    abilities: [
      {
        name: "Claw Attack",
        effect: "1d8 damage to a target.",
        icon: "mdi-hand-back-right",
        color: "text-gray-700",
        isBasic: true,
      },
      {
        name: "Stone Bulwark",
        effect: "+4 AC to self or ally for 1 turn.",
        icon: "mdi-shield",
        color: "text-gray-500",
      },
      {
        name: "Winged Slash",
        effect: "2d6 damage to a target.",
        icon: "mdi-sword",
        color: "text-red-500",
      },
      {
        name: "Frost Breath",
        effect: "Freeze all enemies for 1 turn.",
        icon: "mdi-snowflake",
        color: "text-blue-500",
      },
      {
        name: "Blizzard Bond",
        effect: "Allies deal +1d4 cold damage on next attack.",
        icon: "mdi-weather-snowy",
        color: "text-blue-300",
      },
      {
        name: "Frozen Barrier",
        effect: "+3 AC and block melee to ally for 1 turn.",
        icon: "mdi-snowflake-alert",
        color: "text-blue-600",
      },
      {
        name: "Shattering Strike",
        effect: "3d4 damage, ignores AC bonuses.",
        icon: "mdi-ice-pop",
        color: "text-indigo-500",
      },
      {
        name: "Chill Surge",
        effect: "1d6 cold damage to enemies; allies deal +1d4.",
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
    vulnerabilities: [
      {
        name: "Fire Damage",
        icon: "mdi-fire",
        description: "Take 1d4 additional damage.",
      },
    ],

    abilities: [
      {
        name: "Bite",
        effect: "1d6 damage to a target.",
        icon: "mdi-tooth-outline",
        color: "text-gray-700",
        isBasic: true,
      },
      {
        name: "Pack Tactics",
        effect: "+2 to attack if ally attacks same target.",
        icon: "mdi-paw",
        color: "text-orange-500",
      },
      {
        name: "Savage Bite",
        effect: "2d8 damage to a target.",
        icon: "mdi-tooth",
        color: "text-red-600",
      },
      {
        name: "Lava Roar",
        effect: "1d4 fire damage; allies deal +1 fire damage.",
        icon: "mdi-fire",
        color: "text-red-500",
      },
      {
        name: "Molten Claw",
        effect: "1d6 fire, burn (1d4); ally reacts with attack.",
        icon: "mdi-fire-alert",
        color: "text-orange-600",
      },
      {
        name: "Flame Leap",
        effect: "1d6 damage to 2 targets; allies move 5 ft.",
        icon: "mdi-run-fast",
        color: "text-amber-500",
      },
      {
        name: "Burning Slash",
        effect: "3d4 damage to a target.",
        icon: "mdi-flash",
        color: "text-yellow-600",
      },
      {
        name: "Inferno Rush",
        effect: "1d6 fire to enemies; push back 5 ft.",
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
      {
        name: "Radiant Damage",
        icon: "mdi-white-balance-sunny",
        description: "Take 1d4 additional damage.",
      },
    ],

    abilities: [
      {
        name: "Hoof Strike",
        effect: "1d4 bludgeoning damage to a target.",
        icon: "mdi-horseshoe",
        color: "text-brown-500",
        isBasic: true,
      },
      {
        name: "Shadow Bolt",
        effect: "2d6 shadow damage to a target.",
        icon: "mdi-weather-night",
        color: "text-purple-500",
      },
      {
        name: "Ethereal Grasp",
        effect: "Target's movement is 0 for 1 turn.",
        icon: "mdi-hand",
        color: "text-gray-600",
      },
      {
        name: "Dark Pact",
        effect: "Restore 1d4 mana; caster loses 2 HP.",
        icon: "mdi-heart-broken",
        color: "text-red-500",
      },
      {
        name: "Shadow Veil",
        effect: "+2 AC to self or ally for 1 turn.",
        icon: "mdi-cloak",
        color: "text-black",
      },
      {
        name: "Curse of Weakness",
        effect: "-1d4 Strength to target for 1 turn.",
        icon: "mdi-skull",
        color: "text-green-500",
      },
      {
        name: "Soul Drain",
        effect: "1d6 shadow damage; heal or shield ally.",
        icon: "mdi-spa",
        color: "text-blue-500",
      },
      {
        name: "Umbral Beacon",
        effect: "Allies deal +1d4 shadow damage next attack.",
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
    vulnerabilities: [
      {
        name: "Psychic Damage",
        icon: "mdi-brain",
        description: "Take 1d4 additional damage.",
      },
    ],

    abilities: [
      {
        name: "Sword Slash",
        effect: "1d8 slashing damage to a target.",
        icon: "mdi-sword",
        color: "text-gray-700",
        isBasic: true,
      },
      {
        name: "Shield Bash",
        effect: "Stun target for 1 turn.",
        icon: "mdi-shield",
        color: "text-yellow-600",
      },
      {
        name: "Protective Formation",
        effect: "+2 AC to self and ally for 1 turn.",
        icon: "mdi-shield-account",
        color: "text-blue-500",
      },
      {
        name: "Smite Evil",
        effect: "2d6 radiant damage to a target.",
        icon: "mdi-white-balance-sunny",
        color: "text-orange-500",
      },
      {
        name: "Shield Wall",
        effect: "Block melee damage to self and allies.",
        icon: "mdi-shield-plus",
        color: "text-gray-500",
      },
      {
        name: "Taunt",
        effect: "Force enemies to attack you for 1 turn.",
        icon: "mdi-account-voice",
        color: "text-red-500",
      },
      {
        name: "Sacred Strike",
        effect: "1d8 damage, restore 1 stamina point.",
        icon: "mdi-sword-cross",
        color: "text-purple-500",
      },
      {
        name: "Bulwark of Faith",
        effect: "+2 AC to allies within 10 ft. for 1 turn.",
        icon: "mdi-shield-star",
        color: "text-green-500",
      },
    ],
    avatar: "",
  },
};

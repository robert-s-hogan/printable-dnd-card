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
        modifier: 2,
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
        modifier: 3,
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
      {
        name: "Claw Attack",
        effect: "Hit target for 1d8",
        icon: "mdi-hand-back-right",
        color: "text-gray-700",
        isBasic: true,
      },
      {
        name: "Stone Skin",
        effect: "+4 AC for 1 turn",
        icon: "mdi-shield",
        color: "text-gray-500",
      },
      {
        name: "Winged Slash",
        effect: "Hit target for 2d6",
        icon: "mdi-sword",
        color: "text-red-500",
      },
      {
        name: "Frost Breath",
        effect: "Freeze all targets for 1 turn",
        icon: "mdi-snowflake",
        color: "text-blue-500",
      },
      {
        name: "Blizzard Blast",
        effect: "Hit all targets for 1d4",
        icon: "mdi-weather-snowy",
        color: "text-blue-300",
      },
      {
        name: "Frozen Barrier",
        effect: "+3 AC and block all melee attacks this turn",
        icon: "mdi-snowflake-alert",
        color: "text-blue-600",
      },
      {
        name: "Shattering Strike",
        effect: "Hit target for 3d4, ignore AC bonuses",
        icon: "mdi-ice-pop",
        color: "text-indigo-500",
      },
      {
        name: "Chill Surge",
        effect: "Hit all targets for 1d6",
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
        modifier: 3,
        modifierDescription: "Initial +2, Racial +1",
      },
      {
        name: "Dexterity",
        base: 14,
        modifier: 2,
        modifierDescription: "Initial +2",
      },
      {
        name: "Constitution",
        base: 12,
        modifier: 1,
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
      {
        name: "Bite",
        effect: "Hit target for 1d6",
        icon: "mdi-tooth-outline",
        color: "text-gray-700",
        isBasic: true,
      },
      {
        name: "Pack Tactics",
        effect: "+2 attack roll when near allies",
        icon: "mdi-paw",
        color: "text-orange-500",
      },
      {
        name: "Savage Bite",
        effect: "Hit target for 2d8",
        icon: "mdi-tooth",
        color: "text-red-600",
      },
      {
        name: "Lava Roar",
        effect: "Scorch all targets for 1d4",
        icon: "mdi-fire",
        color: "text-red-500",
      },
      {
        name: "Molten Claw",
        effect: "Hit target for 1d6 and apply burn (1d4/turn)",
        icon: "mdi-fire-alert",
        color: "text-orange-600",
      },
      {
        name: "Flame Leap",
        effect: "Hit 2 targets for 1d6",
        icon: "mdi-run-fast",
        color: "text-amber-500",
      },
      {
        name: "Burning Slash",
        effect: "Hit target for 3d4",
        icon: "mdi-flash",
        color: "text-yellow-600",
      },
      {
        name: "Inferno Rush",
        effect: "Hit all targets for 1d6 and push back 5 feet",
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
        modifier: 2,
        modifierDescription: "Initial +2 from Dexterity",
      },
      {
        name: "Hit Points",
        base: 10,
        modifier: 1,
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
        modifier: 2,
        modifierDescription: "Initial +2",
      },
      {
        name: "Constitution",
        base: 12,
        modifier: 1,
        modifierDescription: "Initial +1",
      },
      {
        name: "Intelligence",
        base: 14,
        modifier: 3,
        modifierDescription: "Initial +2, Racial +1",
      },
      {
        name: "Wisdom",
        base: 13,
        modifier: 2,
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
      {
        name: "Hoof Strike",
        effect: "Hit target for 1d4 bludgeoning damage",
        icon: "mdi-horseshoe",
        color: "text-brown-500",
        isBasic: true,
      },
      {
        name: "Shadow Bolt",
        effect: "Hit target for 2d6 shadow damage",
        icon: "mdi-weather-night",
        color: "text-purple-500",
      },
      {
        name: "Ethereal Grasp",
        effect: "Reduce target's movement to 0 for 1 turn",
        icon: "mdi-hand",
        color: "text-gray-600",
      },
      {
        name: "Dark Pact",
        effect: "Restore 1d4 mana, lose 2 hit points",
        icon: "mdi-heart-broken",
        color: "text-red-500",
      },
      {
        name: "Shadow Veil",
        effect: "Gain +2 AC for 1 turn",
        icon: "mdi-cloak",
        color: "text-black",
      },
      {
        name: "Curse of Weakness",
        effect: "Lower target's Strength by 1d4",
        icon: "mdi-skull",
        color: "text-green-500",
      },
      {
        name: "Soul Drain",
        effect: "Hit target for 1d6 and heal self for the same amount",
        icon: "mdi-spa",
        color: "text-blue-500",
      },
      {
        name: "Void Step",
        effect: "Teleport up to 15 feet to an unoccupied space",
        icon: "mdi-arrow-decision-auto",
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
        modifier: 2,
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
        modifier: 2,
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
        modifier: 2,
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
        modifier: 1,
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
      {
        name: "Sword Slash",
        effect: "Hit target for 1d8 slashing damage",
        icon: "mdi-sword",
        color: "text-gray-700",
        isBasic: true, // Optional property to identify it as basic
      },
      {
        name: "Shield Bash",
        effect: "Stun target for 1 turn",
        icon: "mdi-shield",
        color: "text-yellow-600",
      },
      {
        name: "Defensive Stance",
        effect: "Increase AC by +2 for 1 turn",
        icon: "mdi-shield-account",
        color: "text-blue-500",
      },
      {
        name: "Smite Evil",
        effect: "Hit target for 2d6 radiant damage",
        icon: "mdi-white-balance-sunny",
        color: "text-orange-500",
      },
      {
        name: "Shield Wall",
        effect: "Block all melee damage for 1 turn",
        icon: "mdi-shield-plus",
        color: "text-gray-500",
      },
      {
        name: "Taunt",
        effect: "Force all enemies to attack only you for 1 turn",
        icon: "mdi-account-voice",
        color: "text-red-500",
      },
      {
        name: "Sacred Strike",
        effect: "Hit target for 1d8 and restore 1 stamina point",
        icon: "mdi-sword-cross",
        color: "text-purple-500",
      },
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

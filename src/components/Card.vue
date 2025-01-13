<template>
  <div class="card-container p-1 bg-gray-100">
    <div
      class="card max-w-7xl mx-auto border border-gray-300 shadow-md bg-white p-4 flex"
    >
      <!-- Left Section: Image -->
      <div class="card-image w-1/2 flex justify-center items-center">
        <img
          :src="image"
          alt="Caster Image"
          class="max-h-full max-w-full rounded-lg"
        />
      </div>

      <!-- Right Section: Content -->
      <div class="card-content w-1/2 px-6 flex flex-col justify-between">
        <h1 class="text-2xl font-bold mb-4">&nbsp;</h1>

        <!-- AC and Hit Points Section -->
        <div class="ac-hp mb-6">
          <h2 class="text-2xl font-bold text-center mb-4">AC & Hit Points</h2>
          <div class="flex justify-center space-x-16">
            <!-- Armor Class (AC) -->
            <div class="flex flex-col items-center">
              <div
                class="circle w-16 h-16 border-2 border-gray-500 rounded-full flex items-center justify-center text-2xl font-bold"
              >
                <span>&nbsp;</span>
              </div>
              <p class="mt-2 text-sm font-bold">AC</p>
              <p class="text-xs text-gray-600 text-center">10 + Dex Modifier</p>
            </div>
            <!-- Hit Points Section -->
            <div class="flex flex-col items-center">
              <div
                class="circle w-16 h-16 border-2 border-gray-500 rounded-full flex items-center justify-center text-2xl font-bold"
              >
                <span>&nbsp;</span>
              </div>
              <p class="mt-2 text-sm font-bold">Hit Points({{ hitPoints }})</p>
              <p class="text-xs text-gray-600 text-center">
                {{ hitDieMax }} + Con Modifier
              </p>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="stats mb-6">
          <h2 class="text-2xl font-bold text-center mb-4">Stats</h2>
          <div class="flex justify-center space-x-8">
            <!-- Each Stat -->
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="flex flex-col items-center text-center"
            >
              <!-- Circle for manual input -->
              <div
                class="circle w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center text-xl font-bold"
              >
                <span>&nbsp;</span>
                <!-- Empty space for manual input -->
              </div>
              <!-- Stat Name -->
              <p class="mt-2 text-sm font-bold">{{ stat.name }}</p>
              <!-- Stat Description -->
              <p class="text-xs text-gray-600">
                {{ stat.base }} + {{ stat.modifier }}
              </p>
            </div>
          </div>
        </div>

        <!-- Mana Section -->
        <div class="mana mb-6">
          <h2 class="text-xl font-semibold text-center mb-2">Mana</h2>
          <div class="flex justify-center space-x-4">
            <!-- Empty Mana Slots -->
            <div
              v-for="i in manaSlots"
              :key="i"
              class="circle w-12 h-12 border-2 border-gray-500 rounded-full flex justify-center items-center text-xl font-bold"
            >
              <span>&nbsp;</span>
              <!-- Empty space for manual input -->
            </div>
          </div>
        </div>

        <!-- Abilities Section -->
        <div class="abilities mb-6">
          <h2 class="text-lg font-semibold text-center mb-4">Abilities</h2>
          <div class="grid grid-cols-4 gap-4">
            <!-- Each Ability -->
            <div
              v-for="(ability, index) in abilities"
              :key="index"
              class="flex flex-col items-center text-center"
            >
              <!-- Icon for Ability -->
              <div class="icon">
                <Icon
                  :icon="ability.icon"
                  class="w-10 h-10"
                  :class="ability.color"
                />
              </div>
              <!-- Ability Name -->
              <p class="mt-2 text-sm font-bold">{{ ability.name }}</p>
              <!-- Ability Description -->
              <p class="text-xs text-gray-600">{{ ability.effect }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon, // Register the Iconify component
  },
  props: {
    image: {
      type: String,
      default: "/src/assets/feykin_caster.webp",
    },
    stats: {
      type: Array,
      default: () => [
        { name: "Strength", base: 10, modifier: 1 },
        { name: "Dexterity", base: 14, modifier: 2 },
        { name: "Constitution", base: 12, modifier: 1 },
        { name: "Intelligence", base: 8, modifier: 0 },
        { name: "Wisdom", base: 10, modifier: 0 },
        { name: "Charisma", base: 8, modifier: 0 },
      ],
    },
    manaSlots: {
      type: Number,
      default: 5,
    },
    abilities: {
      type: Array,
      default: () => [
        {
          name: "Lightning Strike",
          effect: "Hit one target for 1d6",
          icon: "mdi-lightning-bolt",
          color: "text-yellow-500",
        },
        {
          name: "Fireball Burst",
          effect: "Hit ALL targets for 1d4",
          icon: "mdi-fire-circle",
          color: "text-red-500",
        },
        {
          name: "Frostbolt",
          effect: "Hit one target for 1d6",
          icon: "mdi-snowflake",
          color: "text-blue-500",
        },
        {
          name: "Time Stop",
          effect: "Skip enemy's turn",
          icon: "mdi-clock-time-four",
          color: "text-gray-600",
        },
        {
          name: "Levitate",
          effect: "Move a target",
          icon: "mdi-arrow-up-bold",
          color: "text-indigo-500",
        },
        {
          name: "Magic Missile",
          effect: "Auto-hit for 2d4",
          icon: "mdi-target",
          color: "text-purple-500",
        },
        {
          name: "Teleport",
          effect: "Move instantly",
          icon: "mdi-map-marker-distance",
          color: "text-green-500",
        },
        {
          name: "Shield",
          effect: "+3 AC",
          icon: "mdi-shield-check",
          color: "text-blue-700",
        },
      ],
    },
  },
  computed: {
    // Determine the highest stat
    highestStat() {
      return this.stats.reduce((max, stat) =>
        stat.base > max.base ? stat : max
      );
    },
    // Hit Die Max based on the highest stat
    hitDieMax() {
      const lookupTable = {
        Strength: 12,
        Dexterity: 10,
        Constitution: 8,
        Intelligence: 6,
        Wisdom: 6,
        Charisma: 6,
      };
      return lookupTable[this.highestStat.name] || 6; // Default to d6 if no match
    },
    // Calculated HP
    hitPoints() {
      const conModifier =
        this.stats.find((stat) => stat.name === "Constitution")?.modifier || 0;
      return this.hitDieMax + conModifier + this.highestStat.modifier;
    },
  },
};
</script>

<style scoped>
.circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #4b5563; /* Gray-500 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon img {
  display: block;
}
.ac-hp .circle {
  width: 64px; /* Larger circle for AC & HP */
  height: 64px;
}
</style>

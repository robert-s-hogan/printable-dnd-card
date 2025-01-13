<template>
  <div class="card-container p-1 bg-gray-100">
    <div
      class="card max-w-7xl mx-auto border border-gray-300 shadow-md bg-white p-4 flex"
    >
      <!-- Left Section: Image -->
      <div
        v-if="showImage"
        class="card-image w-1/2 flex justify-center items-center"
      >
        <img
          :src="image"
          alt="Character Image"
          class="max-h-full max-w-full rounded-lg"
        />
      </div>

      <!-- Right Section: Content -->
      <div
        :class="showImage ? 'w-1/2' : 'w-full'"
        class="card-content px-6 flex flex-col justify-between"
      >
        <h1 class="text-2xl font-bold mb-4 text-center">{{ title }}</h1>

        <!-- Stats Section -->
        <div class="stats mb-4">
          <div class="grid grid-cols-5 gap-4 items-center">
            <!-- First Stat Block (2x2) -->
            <div class="grid grid-cols-2 gap-4 col-span-2">
              <div
                v-for="(stat, index) in stats.slice(0, 4)"
                :key="index"
                class="flex flex-col items-center"
              >
                <div
                  class="circle w-16 h-16 border-2 border-gray-500 rounded-full flex items-center justify-center text-xl font-bold"
                >
                  &nbsp;
                </div>
                <p class="mt-2 text-sm font-bold">{{ stat.name }}</p>
                <p class="text-xs text-gray-600">
                  Base: {{ stat.base
                  }}{{ stat.modifier ? ` Mod: ${stat.modifier}` : "" }}
                </p>
                <p class="text-xs text-gray-600">
                  {{ stat.modifierDescription }}
                </p>
              </div>
            </div>

            <!-- Avatar (1x1 in center) -->
            <div class="flex flex-col items-center col-span-1">
              <img
                :src="avatar"
                alt="Character Avatar"
                class="w-24 h-24 rounded-full border border-gray-500"
              />
            </div>

            <!-- Second Stat Block (2x2) -->
            <div class="grid grid-cols-2 gap-4 col-span-2">
              <div
                v-for="(stat, index) in stats.slice(4)"
                :key="index"
                class="flex flex-col items-center"
              >
                <div
                  class="circle w-16 h-16 border-2 border-gray-500 rounded-full flex items-center justify-center text-xl font-bold"
                >
                  &nbsp;
                </div>
                <p class="mt-2 text-sm font-bold">{{ stat.name }}</p>
                <p class="text-xs text-gray-600">
                  Base: {{ stat.base
                  }}{{ stat.modifier ? ` Mod: ${stat.modifier}` : "" }}
                </p>
                <p class="text-xs text-gray-600">
                  {{ stat.modifierDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2">
          <!-- Vulnerabilities Section -->
          <div v-if="vulnerabilities.length" class="vulnerabilities mb-4">
            <h2 class="text-sm font-bold">Vulnerabilities</h2>
            <ul class="list-disc list-inside text-xs text-gray-600">
              <li
                v-for="(vulnerability, index) in vulnerabilities"
                :key="index"
                class="flex items-center space-x-2"
              >
                <Icon :icon="vulnerability.icon" class="w-4 h-4" />
                <span>{{ vulnerability.name }}</span>
              </li>
            </ul>
          </div>

          <!-- Racials Section -->
          <div v-if="racials.length" class="racials mb-4">
            <h2 class="text-sm font-bold">Racials</h2>
            <ul class="list-disc list-inside text-xs text-gray-600">
              <li
                v-for="(racial, index) in racials"
                :key="index"
                class="flex items-center space-x-2"
              >
                <Icon :icon="racial.icon" class="w-4 h-4" />
                <span>{{ racial.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Abilities Section -->
        <div class="abilities my-4 space-y-4">
          <!-- Resource Section -->
          <div class="resource mb-4">
            <div class="flex justify-center items-center space-x-4">
              <div
                v-for="i in resourceSlots"
                :key="i"
                class="circle w-12 h-12 border-2 border-gray-500 rounded-full flex justify-center items-center text-xl font-bold"
              >
                <span>&nbsp;</span>
              </div>
            </div>
            <span class="flex justify-center mt-2 text-gray-600 text-xs">
              {{ resourceSlots }} {{ resourceType }}</span
            >
          </div>

          <div class="grid grid-cols-4 gap-4">
            <!-- Special Abilities -->

            <div
              v-for="(ability, index) in abilities"
              :key="index"
              class="flex flex-col items-center text-center"
            >
              <div class="icon mb-2">
                <Icon
                  :icon="ability.icon"
                  class="w-10 h-10"
                  :class="ability.color"
                />
              </div>
              <p class="text-sm font-bold">{{ ability.name }}</p>
              <p class="text-xs text-gray-600 mb-2">{{ ability.effect }}</p>
              <!-- Ability Usage Circles -->
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
    Icon,
  },
  props: {
    title: {
      type: String,
      default: "Character Name",
    },
    image: {
      type: String,
      default: "",
    },
    stats: {
      type: Array,
      default: () => [],
    },
    ac: {
      type: String,
      default: "",
    },
    hitPoints: {
      type: String,
      default: "",
    },
    resourceType: {
      type: String,
      default: "Mana", // Dynamically set
    },
    resourceSlots: {
      type: Number,
      default: 5, // Default no resources
    },
    basicAttack: {
      type: Object,
      default: () => ({
        name: "Basic Attack",
        effect: "Hit target for 1d4",
        icon: "mdi-sword",
        color: "text-gray-500",
      }),
    },
    abilities: {
      type: Array,
      default: () => [],
    },
    vulnerabilities: {
      type: Array,
      default: () => [], // Ensures vulnerabilities is always defined as an array
    },
    racials: {
      type: Array,
      default: () => [], // Ensures racials is always defined as an array
    },
    showImage: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: String,
      default: "",
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

.text-energy {
  color: #f97316; /* Orange for Energy */
}

.text-mana {
  color: #3b82f6; /* Blue for Mana */
}

.text-rage {
  color: #ef4444; /* Red for Rage */
}
</style>

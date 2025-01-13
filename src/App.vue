<template>
  <main class="min-h-screen bg-gray-100 flex justify-center items-center">
    <CharacterCardsView />
  </main>
</template>

<script>
import CharacterCardsView from "@/views/CharacterCardsView.vue";

export default {
  components: {
    CharacterCardsView,
  },
};
</script>

<template>
  <div class="grid grid-cols-2">
    <CharacterCard
      v-for="(character, key) in characterData"
      :key="key"
      :title="character.name"
      :stats="character.stats"
      :ac="character.ac"
      :hitPoints="character.hitPoints"
      :abilities="character.abilities"
      :resourceType="character.resourceType"
      :resourceSlots="character.resourceSlots"
      :showImage="false"
      :racials="character.racials"
      :vulnerabilities="character.vulnerabilities"
      :avatar="character.avatar"
    />
  </div>
</template>

<script>
import CharacterCard from "@/components/CharacterCard.vue";
import { characterData } from "@/data/characterData.js";

export default {
  components: {
    CharacterCard,
  },
  data() {
    return {
      characterData,
    };
  },
};
</script>

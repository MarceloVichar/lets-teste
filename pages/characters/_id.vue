<template>
  <div class="container">
    <CharacterInfosContainer :character-infos="character" />
  </div>
</template>

<script>
import Character from "@/services/api";
import CharacterInfosContainer from "@/components/character/CharacterInfosContainer.vue";

export default {
  components: { CharacterInfosContainer },
  name: "description",

  async asyncData({ params }) {
    try {
      const result = await Character.get(params.id);
      const [character] = result.data?.data?.results;
      return { character };
    } catch (err) {
      return { character: {} };
    }
  },
};
</script>

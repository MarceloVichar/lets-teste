<template>
  <div class="w-3/4">
    <CharacterInfosContainer :character-infos="character" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Character from "../../services/api";

export default Vue.extend({
  name: "description",
  created() {
    let id = this.$route.params.id;
    Character.get(id).then((res) => {
      this.character = res.data.data.results[0];
    });
  },
  data() {
    return {
      character: {
        name: "",
        comics: {
          items: [],
        },
        thumbnail: {
          path: "",
          extension: "",
        },
        series: {
          items: [],
        },
      },
    };
  },
});
</script>

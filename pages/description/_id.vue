<template>
  <div>
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
      console.log(this.character);
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

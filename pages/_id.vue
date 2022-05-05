<template>
  <div class="w-11/12 sm:w-3/4">
    <CharacterInfosContainer :character-infos="character" :loading="loading" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Character from "../services/api";

export default Vue.extend({
  name: "description",
  mounted() {
    const id = this.$route.params?.id;
    Character.get(id)
      .then((res) => {
        this.character = res.data?.data?.results[0];
        if (this.character && this.character?.name === "") {
          this.$router.push({ path: "/404" });
        }
      })
      .catch((error) => {
        this.$router.push({ path: "/404" });
      });
    this.debouncePage();
  },
  data() {
    return {
      loading: false,
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
  methods: {
    debouncePage() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
});
</script>

<template>
  <div class="container">
    <CharacterInfosContainer :character-infos="character" :loading="loading" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Character from "@/services/api";
import CharacterInfosContainer from '@/components/character/CharacterInfosContainer.vue'

export default Vue.extend({
  components: { CharacterInfosContainer },
  name: "description",
  mounted() {
    const id = this.$route.params?.id;
    this.loading = true
    Character.get(id)
      .then((res) => {
        this.character = res.data?.data?.results[0];
        if (this.character && this.character?.name === "") {
          this.$router.push({ path: "/404" });
        }
      })
      .catch((error) => {
        this.$router.push({ path: "/404" });
      })
      .finally(() => {this.loading = false});
    
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
});
</script>

<template>
  <button
    type="submit"
    v-on:click="submit(character.id)"
    class="border mb-2 h-12 rounded-md text-white bg-red-500"
  >
    More information
  </button>
</template>

<script>
export default {
  name: "SubmitButtonCardCharacter",
  props: {
    character: Object,
  },
  methods: {
    submit(characterId) {
      this.$router.push({
        path: `/${characterId}`,
      });
    },
  },
};
</script>

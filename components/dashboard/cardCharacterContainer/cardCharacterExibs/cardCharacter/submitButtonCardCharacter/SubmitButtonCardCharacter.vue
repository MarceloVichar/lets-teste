<template>
  <div class=" border mb-2 h-12 rounded-md w-3/4 text-white bg-red-500 hover:opacity-80 hover:shadow-md flex justify-center items-center transition duration-300 ease-in-out">
    <button
    class="w-full h-full"
    type="submit"
    v-on:click="submit(character.id)"
  >
    More information
  </button>
  </div>
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

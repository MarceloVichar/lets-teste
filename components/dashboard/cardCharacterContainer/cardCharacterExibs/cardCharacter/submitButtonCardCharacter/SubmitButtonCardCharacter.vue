<template>
  <div class="w-full"> 
    <nuxt-link :to="`/${character.id}`">
      <div class="flex justify-center">
        <button
          class="border mb-2 h-12 rounded-md w-3/4 text-white bg-red-500 hover:opacity-80 hover:shadow-md  transition duration-300 ease-in-out"
          type="submit">
          More information
        </button>
      </div>
    </nuxt-link>
    </div>
</template>

<script>
export default {
  name: "SubmitButtonCardCharacter",
  props: {
    character: Object,
  },
};
</script>

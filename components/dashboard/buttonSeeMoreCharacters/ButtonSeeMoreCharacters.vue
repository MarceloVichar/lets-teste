<template>
  <button
    type="button"
    class="flex gap-4 p-4 rounded text-white mb-10 bg-red-500 mx-auto hover:opacity-80"
    @click.prevent="$emit('onLoadMore')"
  >
    See more results
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
</svg>
  </button>
</template>

<script>

export default {
  name: "ButtonSeeMoreCharacters",
};
</script>

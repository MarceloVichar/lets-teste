<template>
  <button
    type="button"
    class="p-4 rounded text-white mb-10 bg-red-500 mx-auto"
    @click.prevent="$emit('onLoadMore')"
  >
    See more results
  </button>
</template>

<script>
export default {
  name: "ButtonSeeMoreCharacters",
};
</script>

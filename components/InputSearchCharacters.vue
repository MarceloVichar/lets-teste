<template>
  <div
    class="border border-solid border-black rounded w-50 md:w-80 h-12 flex items-center gap-4 p-4 bg-white"
  >
    <i class="fa fa-search" />
    <input
      @input="$emit('onSearch', $event.target.value)"
      type="text"
      placeholder="Search a character"
      class="w-full outline-none"
    />
  </div>
</template>

<script>
export default {
  name: "InputSearchCharacters",
};
</script>

<template>
  <div
    class="w-full flex flex-col items-center mx-auto gap-6 p-4 bg-white rounded"
  >
    <InputSearchCharacters @onSearch="$emit('onSearch', $event)" />

    <Spinner v-if="loading" />
    <CardsCharacterExibs v-if="!loading" :characters-list="charactersList" />
  </div>
</template>

<script>
export default {
  name: "CardCharacterContainer",
  props: ["charactersList", "loading"],
};
</script>

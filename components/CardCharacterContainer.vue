<template>
  <div
    class="w-3/4 flex flex-col items-center mx-auto gap-6 p-4 bg-white rounded"
  >
    <InputSearchCharacters @onSearch="$emit('onSearch', $event)" />
    <CardsCharacterExibs :characters-list="charactersList" />
  </div>
</template>

<script>
export default {
  name: "CardCharacterContainer",
  props: ["charactersList"],
};
</script>

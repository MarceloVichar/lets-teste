<template>
  <div
    v-if="characterInfos.description"
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-4xl">Description</h2>
    <p class="text-justify">{{ this.characterInfos.description }}</p>
  </div>
  <div
    v-else
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-4xl">description unavailable</h2>
  </div>
</template>

<script>
export default {
  name: "DescriptionCharacterInfos",
  props: ["characterInfos"],
};
</script>

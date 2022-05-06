<template>
  <div
    v-if="characterInfos.series.items.length"
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">Series</h2>
    <p v-for="item in characterInfos.series.items" :key="item.id">
      {{ item.name }}
    </p>
  </div>
  <div
    v-else
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">Series unavaible</h2>
  </div>
</template>

<script>
export default {
  name: "SeriesCharacterInfos",
  props: ["characterInfos"],
};
</script>

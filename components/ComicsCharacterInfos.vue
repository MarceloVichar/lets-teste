<template>
  <div
    v-if="characterInfos.comics.items.length"
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-4xl">Comics</h2>
    <p v-for="item in characterInfos.comics.items" :key="item.id">
      {{ item.name }}
    </p>
  </div>
  <div
    v-else
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-4xl">Comics unavailable</h2>
  </div>
</template>

<script>
export default {
  name: "ComicsCharacterInfos",
  props: ["characterInfos"],
};
</script>

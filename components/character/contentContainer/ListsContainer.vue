<template>
  <div
    v-if="infos.length"
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">{{ nameInfo }}</h2>
    <div v-for="info in infos" :key="info.id">
      <a :href="`${info.urls[0].url}`" target="_blank"
        ><p>{{ info.title }}</p></a
      >
    </div>
  </div>
  <div
    v-else
    class="flex flex-col w-full h-auto gap-4 rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">{{ nameInfo }} unavailable</h2>
  </div>
</template>

<script>
export default {
  name: "ListsContainer",
  props: ["infos", "nameInfo"],
};
</script>

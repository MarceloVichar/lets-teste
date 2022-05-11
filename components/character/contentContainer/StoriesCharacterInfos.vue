<template>
<div
    v-if="characterInfos.stories.items.length"
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
>
    <h2 class="text-2xl sm:text-4xl">Stories</h2>
    <p v-for="item in characterInfos.stories.items" :key="item.id">
        {{ item.name }}
    </p>
</div>
<div
    v-else
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
>
    <h2 class="text-2xl sm:text-4xl">Stories unavaible</h2>
</div>
</template>

<script>
export default {
    name: "StoriesCharacterInfos",
    props: ["characterInfos"],
};
</script>
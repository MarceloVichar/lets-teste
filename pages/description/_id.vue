<template>
  <main class="flex flex-col items-center gap-12 min-h-screen bg-red-750">
    <HeaderContainer />
    <div class="w-3/4  p-2 flex gap-2 mb-10 flex-col bg-white rounded">
      <div class="flex w-full md:justify-between justify-center flex-col md:flex-row">
        <div class="flex items-center m-10 ">
          <h1 class="text-center md:text-left w-full font-bold lg:text-4xl md:text-2xl xl:text-8xl" >
            {{ this.character.name }}
          </h1>
        </div>
        <div class="flex justify-center">
          <img
          :src="character.thumbnail.path + '.' + character.thumbnail.extension"
          alt="img personagem"
          class="object-none h-60 w-96 rounded-lg"
        />
        </div>
      </div>
      <div v-if="character.description" class="flex flex-col w-full h-auto gap-4  cardcharacter  rounded-lg overflow-hidden	p-6 shadow-md border border-slate-100">
        <h2  class="text-4xl">Description</h2>
        <p class="text-justify">{{ this.character.description }}</p>
      </div>
      <div v-if="!character.description" class="flex flex-col w-full h-auto gap-4  cardcharacter  rounded-lg overflow-hidden	p-6 shadow-md border border-slate-100">
        <h2  class="text-4xl">description unavailable</h2>
      </div>

      <div v-if="character.comics.items.length" class="flex flex-col w-full h-auto gap-4  cardcharacter  rounded-lg overflow-hidden	p-6 shadow-md border border-slate-100">
        <h2 class="text-4xl">Comics</h2>
        <p v-for="item in character.comics.items" :key="item.id">
          {{ item.name }}
        </p>
      </div>
      <div v-if="!character.comics.items.length" class="flex flex-col w-full h-auto gap-4  cardcharacter  rounded-lg overflow-hidden	p-6 shadow-md border border-slate-100">
        <h2 class="text-4xl">Comics unavailable</h2>
      </div>

      <div v-if="character.series.items.length" class="flex flex-col w-full h-auto gap-4  cardcharacter  rounded-lg overflow-hidden	p-6 shadow-md border border-slate-100">
        <h2 class="text-4xl">Series</h2>
        <p v-for="item in character.series.items" :key="item.id">
          {{ item.name }}
        </p>
      </div>
      <div v-if="!character.series.items.length" class="flex flex-col w-full h-auto gap-4  cardcharacter  rounded-lg overflow-hidden	p-6 shadow-md border border-slate-100">
        <h2 class="text-4xl">Series unavaible</h2>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Character from "../../services/api";

export default Vue.extend({
  name: "description",
  created() {
    let id = this.$route.params.id;
    Character.get(id).then((res) => {
      this.character = res.data.data.results[0];
      console.log(this.character);
    });
  },
  data() {
    return {
      character: {
        name: "",
        comics: {
          items: [],
        },
        thumbnail: {
          path: "",
          extension: "",
        },
        series: {
          items: [],
        },
      },
    };
  },
});
</script>

<template>
  <div
    v-if="characterInfos.comics.items.length"
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">Comics</h2>
    <p v-for="item in characterInfos.comics.items" :key="item.id">
      {{ item.name }}
    </p>
    <div v-for="comic in comics" :key="comic.id">
    <a :href="`${comic.urls[0].url}`" target="_blank"><p>{{comic.title}}</p></a>
      
    </div>
  </div>
  <div
    v-else
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">Comics unavailable</h2>
  </div>
</template>

<script>
import Character from "@/services/api";

export default {
  name: "ComicsCharacterInfos",
  props: ["characterInfos"],
  data() { return {comics: []}
    
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const id = this.$route.params?.id
      console.log(id);
      await Character.content(id, "comics").
        then((res) => {
          this.comics = res.data?.data?.results
          console.log(this.comics);
        })
        .catch(() => {console.log("deu erro");})
    }
  },
  
};

</script>

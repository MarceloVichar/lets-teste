<template>
  <div>
    <div v-if="loading" style="height: 357px">
      <Spinner class="h-full flex items-center justify-center" />
    </div>
    <div v-else>
      <div
        v-if="infos.length"
        class="flex flex-col w-full h-auto gap-4 rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
      >
        <h2 class="text-2xl sm:text-4xl">{{ nameInfo }}</h2>
        <carousel
          :perPageCustom="[
            [200, 1],
            [300, 2],
            [470, 3],
            [600, 4],
            [900, 5],
            [1020, 6],
          ]"
          :autoplay="false"
          :navigationEnabled="true"
          :loop="true"
          :center="true"
          class="flex gap-2"
        >
          <slide v-for="info in infos" :key="info.id" class="w-125 h-200 p-2">
            <a :href="`${info.urls[0].url}`" target="_blank">
              <img
                :src="info.thumbnail.path + '.' + info.thumbnail.extension"
                alt="info"
                class="w-full h-full rounded-lg hover:opacity-70"
              />
            </a>
          </slide>
        </carousel>
      </div>
      <div v-else>
        <h2 class="text-2xl sm:text-4xl p-6">{{ nameInfo }} unavailable</h2>
      </div>
    </div>
  </div>
  <!-- <div
    v-if="infos.length"
    class="flex flex-col w-full h-auto gap-4 cardcharacter rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">{{ nameInfo }}</h2>
    <div v-if="loading" style="height: 357px">
      <Spinner class="h-full flex items-center justify-center" />
    </div>
    <carousel
      v-else
      :perPageCustom="[
        [200, 1],
        [300, 2],
        [470, 3],
        [600, 4],
        [900, 5],
        [1020, 6],
      ]"
      :autoplay="false"
      :navigationEnabled="true"
      :loop="true"
      :center="true"
      class="flex gap-2"
    >
      <slide v-for="info in infos" :key="info.id" class="w-125 h-200 p-2">
        <a :href="`${info.urls[0].url}`" target="_blank">
          <img
            :src="info.thumbnail.path + '.' + info.thumbnail.extension"
            alt="info"
            class="w-full h-full"
          />
        </a>
      </slide>
    </carousel>
  </div>
  <div
    v-else
    class="flex flex-col w-full h-auto gap-4 rounded-lg overflow-hidden p-6 shadow-md border border-slate-100"
  >
    <h2 class="text-2xl sm:text-4xl">{{ nameInfo }} unavailable</h2>
  </div> -->
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Spinner from "@/components/spinner/Spinner.vue";

export default {
  name: "ListsContainer",
  props: ["infos", "nameInfo", "loading"],
  components: {
    Carousel,
    Slide,
    Spinner,
  },
};
</script>

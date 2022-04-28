<template>
  <div>
    <div
      class="w-3/4 flex flex-col items-center mx-auto gap-6 p-4 bg-white rounded"
    >
      <div
        class="border border-solid border-black rounded w-50 md:w-80 h-12 flex items-center gap-4 p-4 bg-white"
      >
        <i class="fa fa-search" />
        <input
          @input="$emit('onSearch', $event.target.value)"
          type="text"
          placeholder="Search a character"
          class="w-full outline-none"
        />
      </div>
      <!-- <input  /> -->
      <div class="flex flex-wrap justify-center gap-2">
        <div v-for="character in charactersList" v-bind:key="character.id">
          <CardCharacter :character="character" />
        </div>
      </div>
    </div>
    <button
      type="button"
      class="p-4 rounded text-white mb-10 bg-red-500"
      @click.prevent="$emit('onLoadMore')"
    >
      See more results
    </button>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["charactersList"],
};
</script>

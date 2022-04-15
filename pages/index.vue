<template>
  <main class="flex flex-col items-center gap-12 min-h-screen bg-red-750">
    <HeaderContainer />
    <div class="w-3/4 flex flex-col items-center gap-6 p-4 bg-white rounded">
      <div class="border border-solid border-black rounded  w-80 h-12 flex items-center gap-4 p-4 bg-white">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <i class="fa fa-search" />
    <input type="text" placeholder="Search a character" class="w-full outline-none" @input="debounceSearch">
  </div>
      <!-- <input  /> -->
      <div class="flex flex-wrap justify-center gap-2">
        <div v-for="character in characters" v-bind:key="character.id">
          <CardCharacter :character="character" />
        </div>
      </div>
    </div>
    <button @click.prevent="appendNextPage" type="button" class="p-4 rounded text-white mb-10 bg-red-500">
      See more results
    </button>
  </main>
</template>

<script>
import Character from "../services/api.ts";

export default {
  data() {
    return {
      characters: [],
      positionCharacter: 1,
      search: "",
      debounce: null,
    };
  },

  mounted() {
    this.callToApi();
  },

  methods: {
    callToApi( shouldRemoveAll = false) {
      let params = {
        offset: this.positionCharacter,
      };
      Character.list({ offset: this.positionCharacter }).then((res) => {
        if (shouldRemoveAll) {
          this.characters = [];
        }
        this.characters = [...this.characters, ...res.data.results];

        console.log(this.characters);
      });
      this.positionCharacter = this.positionCharacter + 20;
    },
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.search = event.target.value;
        this.updateMySearch();
      }, 600);
    },

    appendNextPage() {
      this.callToApi();
    },
    updateMySearch() {
      this.positionCharacter = 1;
      if (this.search === "") {
        this.callToApi(true);
        return;
      }

      Character.list({
        offset: this.positionCharacter,
        nameStartsWith: this.search,
      }).then((res) => {
        this.characters = res.data.results;
      });
    },
  },
};
</script>

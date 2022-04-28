<template>
  <div>
    <CardList
      :characters-list="characters"
      @onLoadMore="appendNextPage"
      @onSearch="(searchText) => debounceSearch(searchText)"
    />
  </div>
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
    callToApi(shouldRemoveAll = false) {
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
    debounceSearch(text) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.search = text;
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

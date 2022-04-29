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
      filters: {
        offset: 1,
        orderBy: "name",
      },
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      Character.list(this.filters).then((response) => {
        this.characters = response.code === 200 ? response?.data?.results : [];
      });
    },

    debounceSearch(text) {
      setTimeout(() => {
        if (text !== "") {
          this.filters.nameStartsWith = text;
          this.fetchData();
        } else {
          delete this.filters["nameStartsWith"];
          this.fetchData();
        }
      }, 300);
    },

    appendNextPage() {
      this.filters.offset += 20;
      Character.list(this.filters).then((response) => {
        const data = response.code === 200 ? response?.data?.results : [];
        this.characters = this.characters.concat(data);
      });
    },
  },
};
</script>

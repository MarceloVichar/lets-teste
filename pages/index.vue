<template>
  <div class="w-3/4">
    <CardList
      :loading="loading"
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
      loading: false,
      characters: [],
      filters: {
        offset: 0,
        orderBy: "name",
      },
    };
  },

  mounted() {
    this.fetchData();
    this.debouncePage();
  },

  methods: {
    fetchData() {
      Character.list(this.filters).then((response) => {
        this.characters = response.code === 200 ? response?.data?.results : [];
      });
    },

    debouncePage() {
      this.loading = !false;
      setTimeout(() => {
        this.loading = !true;
      }, 1000);
    },

    debounceSearch(text) {
      this.filters.offset = 0;
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

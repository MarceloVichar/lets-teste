<template>
  <div class="container">
    <CardList
      :loading="loading"
      :characters-list="characters"
      @onLoadMore="appendNextPage"
      @onSearch="debounceSearch"
    />
  </div>
</template>

<script>
import Character from "../services/api.ts";
import _ from 'lodash'

export default {
  data() {
    return {
      loading: false,
      characters: [],
      filters: {
        offset: 0,
        limit: 12,
        orderBy: "name",
      },
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.loading = true;
      Character.list(this.filters).then((response) => {
        this.characters = response.code === 200 ? response?.data?.results : [];
      }).finally(() => {this.loading = false});
    },

    appendNextPage() {
      this.filters.offset += 12;
      Character.list(this.filters).then((response) => {
        const data = response.code === 200 ? response?.data?.results : [];
        this.characters = this.characters.concat(data);
      });
    },
    debounceSearch: _.debounce(function (e) {
      this.filters.offset = 0;
        if (e !== "") {
          this.filters.nameStartsWith = e;
          this.fetchData();
          
        } else {
          delete this.filters["nameStartsWith"];
          this.fetchData();
        }
    },500)    
  
  },
};
</script>

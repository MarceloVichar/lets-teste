<template>
  <div class="w-fit container">
    <CardList
      :isLastPage="isLastPage"
      :loading="loading"
      :characters-list="characters"
      @onLoadMore="appendNextPage"
      @onSearch="debounceSearch"
    />
  </div>
</template>

<script>
import Character from "@/services/api.ts";
import CardList from '@/components/dashboard/CardList.vue'
import _ from 'lodash'

export default {
  components: {CardList},
  data() {
    return {
      isLastPage: true,
      totalCharacters: 0,
      loading: true,
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
        if(response.code === 200) {
          this.characters = response?.data?.results
          this.totalCharacters = response?.data?.total
        } else this.characters = []  
      }).finally(() => {
          this.loading = false
          this.isLastPage = this.filters.offset + this.filters.limit >= this.totalCharacters
        });
    },

    appendNextPage() {
      this.filters.offset += 12;
      Character.list(this.filters).then((response) => {
        const data = response.code === 200 ? response?.data?.results : [];
        this.characters = this.characters.concat(data);
        this.isLastPage = this.filters.offset + this.filters.limit >= this.totalCharacters
      });
    },
    debounceSearch: _.debounce(function (e) {
      this.filters.offset = 0;
      this.loading = true
        if (e !== "") {
          this.filters.nameStartsWith = e;
          this.fetchData();
        } else {
          delete this.filters["nameStartsWith"];
          this.fetchData();
        }
    },500),    
  },
};
</script>

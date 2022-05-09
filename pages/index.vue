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
      characters: [],
      totalCharacters: 0,
      isLastPage: true,
      loading: true,
      filters: {
        offset: 0,
        limit: 20,
        orderBy: "name",
      },
    };
  },
  async fetch() {
      if(this.filters.offset === 0) { this.loading = true }
      await(Character.list(this.filters).then((response) => {
        const data = response.code === 200 ? response?.data?.results : [];
        if(this.filters.offset === 0) { this.characters = [] }
        this.characters = this.characters.concat(data);
        this.totalCharacters = response?.data?.total  
      }).finally(() => {
          this.loading = false
          this.isLastPage = this.filters.offset + this.filters.limit >= this.totalCharacters
        }))
    },
  methods: {

    appendNextPage() {
      this.filters.offset += 20;
      this.$fetch()
    },

    debounceSearch: _.debounce(function (e) {
      this.filters.offset = 0;
        if (e !== "") {
          this.filters.nameStartsWith = e;
          this.$fetch()
        } else {
          delete this.filters["nameStartsWith"];
          this.$fetch()
        }
    },500),    
  },
};
</script>

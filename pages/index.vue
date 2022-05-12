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
import CardList from "@/components/dashboard/CardList.vue";
import _ from "lodash";

export default {
  components: { CardList },
  data() {
    return {
      characters: [],
      totalCharacters: 0,
      isLastPage: true,
      loading: true,
      filters: {
        nameStartsWith: undefined,
        offset: 0,
        limit: 20,
        orderBy: "name",
      },
    };
  },

  async fetch() {
    if (this.filters.offset === 0) {
      this.loading = true;
    }
    await Character.list(this.filters)
      .then((response) => {
        const data = response.code === 200 ? response?.data?.results : [];
        if (this.filters.offset === 0) {
          this.characters = [];
        }
        this.characters = this.characters.concat(data);
        this.totalCharacters = response?.data?.total;
      })
      .finally(() => {
        this.loading = false;
        this.isLastPage =
          this.filters.offset + this.filters.limit >= this.totalCharacters;
      });
  },

  watch: {
    filters: {
      deep: true,
      handler() {
        this.$fetch();
      },
    },
  },

  methods: {
    appendNextPage() {
      this.filters.offset += 20;
    },

    debounceSearch: _.debounce(function (e) {
      this.filters.offset = 0;
      this.filters.nameStartsWith = e || undefined;
    }, 500),
  },
};
</script>

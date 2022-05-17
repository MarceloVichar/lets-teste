<template>
  <div class="w-fit container">
    <CardList
      :isLastPage="isLastPage"
      :loading="loading"
      :characters="characters"
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
        offset: "0",
        limit: "20",
      },
    };
  },

  async fetch() {
    if (this.$route.query.offset == "0") {
      this.loading = true;
    }
    await Character.list(this.$route.query)
      .then((response) => {
        const data = response.code === 200 ? response?.data?.results : [];
        if (this.$route.query.offset == "0" || !this.$route.query.offset) {
          this.characters = [];
        }
        this.characters = this.characters.concat(data);
        this.totalCharacters = response?.data?.total;
      })
      .finally(() => {
        this.loading = false;
        this.isLastPage =
          parseInt(this.$route.query.offset) +
            parseInt(this.$route.query.limit) >=
          this.totalCharacters;
      });
  },
  watch: {
    "$route.query"(to) {
      this.filters = {
        nameStartsWith: to?.nameStartsWith,
        offset: to?.offset,
        limit: to?.limit,
      };
      if (this.$route.path == "/") {
        this.$fetch();
      }
    },
  },

  methods: {
    appendNextPage() {
      this.filters.offset = parseInt(this.filters.offset) + 20;
      this.$router.replace({ query: this.filters }).catch((err) => {});
    },

    debounceSearch: _.debounce(function (payload) {
      this.filters.nameStartsWith = payload || undefined;
      this.filters.offset = 0;
      this.$router.replace({ query: this.filters }).catch((err) => {});
    }, 500),
  },
};
</script>

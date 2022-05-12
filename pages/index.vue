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
    };
  },

  async fetch() {
    this.$route.params.limit = 20;
    if ((this.$route.query.query !== null) & (this.$route.query.query !== "")) {
      this.$route.params.nameStartsWith = this.$route.query.query;
    }
    if (this.$route.params.offset === 0) {
      this.loading = true;
    }
    await Character.list(this.$route.params)
      .then((response) => {
        const data = response.code === 200 ? response?.data?.results : [];
        if (this.$route.params.offset === 0) {
          this.characters = [];
        }
        this.characters = this.characters.concat(data);
        this.totalCharacters = response?.data?.total;
      })
      .finally(() => {
        this.loading = false;
        this.isLastPage =
          this.$route.params.offset + this.$route.params.limit >=
          this.totalCharacters;
      });
  },

  methods: {
    appendNextPage() {
      this.$route.params.offset += 20;
      this.$fetch();
    },

    debounceSearch: _.debounce(function (e) {
      this.$route.params.offset = 0;
      this.$route.params.nameStartsWith = e || undefined;
      this.$fetch();
    }, 500),
  },
};
</script>

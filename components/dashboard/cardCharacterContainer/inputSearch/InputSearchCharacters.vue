<template>
  <div
    class="border border-solid border-black rounded w-50 md:w-80 h-12 flex items-center gap-4 p-4 bg-white"
  >
    <i class="fa fa-search" />
    <input
      v-model="query"
      type="text"
      placeholder="Search a character"
      class="w-full outline-none"
    />
  </div>
</template>

<script>
export default {
  name: "InputSearchCharacters",
  data() {
    return {
      query: "",
    };
  },
  watch: {
    query(payload) {
      this.$emit("onSearch", payload);
    },
  },
  mounted() {
    this.setParamsUrl();
  },
  methods: {
    setParamsUrl() {
      this.query = this.$route.query?.query;
    },
  },
};
</script>

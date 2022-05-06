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
      query: ''
    }
  },
  watch: {
    query(payload) {
      this.reloadParamsUrl(payload)
      this.$emit('onSearch', payload)
    }
  },
  mounted() {
    this.setParamsUrl()
  },
  methods: {
    // reloadParamsUrl(payload) {
    //   let url = new URL(window.location.href);
    //   let search_params = url.searchParams;
    //   search_params.append('query', payload);
    //   url.search = search_params.toString();
    //   let new_url = url.toString();
    //   console.log(new_url);
    // },
    setParamsUrl() {
      let url = new URL(window.location.href);
      let params = new URLSearchParams(url.search);
      this.query = params.get("query") || '';
    }
  }
};
</script>

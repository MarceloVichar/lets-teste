<template>
  <main class="flex flex-col items-center gap-12 min-h-screen">
    <HeaderContainer />
    <container class="w-3/4  flex flex-col  items-center gap-6 p-4 bg-white rounded">
      <SearchBar />
      <div
        class="flex flex-wrap justify-center gap-2"
      >
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </div>
    </container>
    <button type="button" class="p-4 rounded">
      Veja mais resultados
    </button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style>

  main {
    background: #61150E;
  }
</style>
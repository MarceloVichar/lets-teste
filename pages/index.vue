<template>
  <main class="flex flex-col items-center gap-12">
  <Header/>
  <container class="w-3/4  flex flex-col gap-3">
    
      <SearchBar/>
      <div class="flex gap-6 flex-wrap p-2 justify-center" >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      pagination
    
  </container>  
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

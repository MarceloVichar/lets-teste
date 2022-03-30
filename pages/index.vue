<template>
  <main class="flex flex-col items-center gap-12 min-h-screen">
    <HeaderContainer />
    <div class="w-3/4  flex flex-col  items-center gap-6 p-4 bg-white rounded">
      <SearchBar />
      <div class="flex flex-wrap justify-center gap-2">
      <div v-for="character in characters">
        <CardCharacter :character="character"/>
        
      </div>
      </div>
    </div>
    <button @click.prevent="appendNextPage" type="button" class="p-4 rounded">
      Veja mais resultados
    </button>
  </main>
</template>

<script>
/*import Vue from 'vue'


export default Vue.extend({
  name: 'IndexPage'
})
*/
import Character from '../services/api.ts'

export default {
  data(){
    return {
      characters: []
    }
  },
  
  mounted() {
    Character.list({limit:6, offset: 1}).then(res => {
      this.characters = res.data.results
    })
  },

methods: {
  appendNextPage() {
    
  }
}
}
  
</script>

<style>

  main {
    background: #61150E;
  }
</style>
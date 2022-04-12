<template>
  <main class="flex flex-col items-center gap-12 min-h-screen">
    <HeaderContainer />
    <div class="w-3/4  flex flex-col  items-center gap-6 p-4 bg-white rounded">
      <SearchBar />
      <input v-model="search" @keyup="updateMySearch" >
      <div class="flex flex-wrap justify-center gap-2">
      <div v-for="character in charactersToExibs" v-bind:key="character.id">
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
import Character from '../services/api.ts'

export default {
  
  data(){
    return {
      characters: [],
      positionCharacter: 1,
      search: '',
      charactersToExibs: []    }
  },

  mounted() {
    this.callToApi()
  },

methods: {
  callToApi(howMuch = 6) {
    let params = {
      offset: this.positionCharacter,
      
    }
    Character.list({offset: this.positionCharacter}).then(res => {
      this.characters = [...this.characters, ...res.data.results]
      this.charactersToExibs = this.characters
    })
    this.positionCharacter = this.positionCharacter + 6
  },
  
  appendNextPage() {
    this.callToApi()
  },
  updateMySearch() {
    console.log(this.characters)
    this.charactersToExibs = this.characters.filter(character => {
      return character.name.toLowerCase().includes(this.search.toLowerCase())
    })
      
    
  }
}
}

  
</script>

<style>

  main {
    background: #61150E;
  }
</style>
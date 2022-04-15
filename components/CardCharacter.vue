<template>
  <div class="flex flex-col w-60 h-120 gap-4  cardcharacter  rounded-lg overflow-hidden	p-2 shadow-md border border-slate-100">
    <div class="">
      <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="personagem"  class="object-none h-48 w-96 rounded-lg">
    </div>
    <div class="flex h-12">
      <h1 class="pl-2 text-xl text-left">
      {{character.name}}
      </h1>
    </div>
    <p class="overflow-hidden relative h-20 text-justify p-2 before:content-['...'] before:absolute before:right-0 before:bottom-0 before:pl-1">
      {{character.description}}
    </p>
    <button type="submit" v-on:click="submit(character.id)" class="border mb-2 h-12 rounded-md text-white bg-red-500">
      More informations
    </button>
  </div>
</template>

<script>
export default {
  name: 'CardCharacter',
  props:{
    character: Object
  },
  methods: {
    submit(characterId) {
      this.$router.push({
        path: `/description/${characterId}`
      })
    }
  }
}
</script>

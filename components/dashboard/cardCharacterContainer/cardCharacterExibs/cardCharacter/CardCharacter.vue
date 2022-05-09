<template>
  <nuxt-link :to="`/characters/${character.id}`" >
    <div
    class="card cursor-pointer flex flex-col items-center w-60 h-120 gap-4 cardcharacter rounded-lg overflow-hidden p-2 shadow-md border border-slate-100"
  >
      <InfosCardCharacter :character="character" />
  </div>
  </nuxt-link>
</template>

<script>
import InfosCardCharacter from '@/components/dashboard/cardCharacterContainer/cardCharacterExibs/cardCharacter/infosCardCharacter/InfosCardCharacter.vue'

export default {
  components: { InfosCardCharacter },
  name: "CardCharacter",
  props: {
    character: Object,
  },
};
</script>

<style>
  .card :hover {
    transform: scale(1.02);
    transition: transform 0.5s;
  }
</style>
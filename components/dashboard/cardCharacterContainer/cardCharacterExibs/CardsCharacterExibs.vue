<template>
    <div class="flex w-full flex-wrap md:justify-start justify-center gap-2">
      <div v-for="character in charactersList" v-bind:key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
</template>

<script>
  import CardCharacter from '@/components/dashboard/cardCharacterContainer/cardCharacterExibs/cardCharacter/CardCharacter.vue'

  export default {
    components: { CardCharacter },
    name: "CardsCharacterExibs",
    props: ["charactersList"],
    }
</script>
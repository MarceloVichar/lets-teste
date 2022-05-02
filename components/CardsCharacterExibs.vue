<template>
    <div class="flex w-full flex-wrap justify-center gap-1">
      <div v-for="character in charactersList" v-bind:key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CardsCharacterExibs",
        props: ["charactersList"],
    }
</script>
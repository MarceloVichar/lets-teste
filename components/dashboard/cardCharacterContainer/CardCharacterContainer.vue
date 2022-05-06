<template>
  <div
    class="w-full flex flex-col items-center mx-auto gap-6 p-4 bg-white rounded mb-4"
  >
    <InputSearchCharacters @onSearch="$emit('onSearch', $event)" />

    <Spinner v-if="loading" />
    <CardsCharacterExibs v-if="!loading" :characters-list="charactersList" />
  </div>
</template>

<script>
import Spinner from '@/components/spinner/Spinner.vue'
import InputSearchCharacters from '@/components/dashboard/cardCharacterContainer/inputSearch/InputSearchCharacters.vue'
import CardsCharacterExibs from '@/components/dashboard/cardCharacterContainer/cardCharacterExibs/CardsCharacterExibs.vue'

export default {
  components: { Spinner, InputSearchCharacters, CardsCharacterExibs },
  name: "CardCharacterContainer",
  props: ["charactersList", "loading"],
};
</script>

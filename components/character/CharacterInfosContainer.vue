<template>
  <div class="p-2 w-full flex mb-10 mx-auto flex-col bg-white rounded">
    <Spinner v-if="loading" />
    <div class="flex flex-col gap-2" v-if="!loading">
      <HeaderCharacterInfos :character-infos="characterInfos" />
      <DescriptionCharacterInfos :character-infos="characterInfos" />
      <ComicsCharacterInfos :character-infos="characterInfos" />
      <SeriesCharacterInfos :character-infos="characterInfos" />
    </div>
  </div>
</template>

<script>
import HeaderCharacterInfos from '@/components/character/contentContainer/HeaderCharacterInfos.vue'
import DescriptionCharacterInfos from '@/components/character/contentContainer/DescriptionCharacterInfos.vue'
import ComicsCharacterInfos from '@/components/character/contentContainer/ComicsCharacterInfos.vue'
import SeriesCharacterInfos from '@/components/character/contentContainer/SeriesCharacterInfos.vue'

export default {
  components: { HeaderCharacterInfos, DescriptionCharacterInfos, ComicsCharacterInfos, SeriesCharacterInfos },
  name: "CharacterInfosContainer",
  props: ["characterInfos", "loading"],
};
</script>

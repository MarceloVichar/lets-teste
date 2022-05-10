<template>
  <div class="p-2 w-full flex mb-10 mx-auto flex-col bg-white rounded">
    <div class="flex flex-col gap-2" >
      <HeaderCharacterInfos :character-infos="characterInfos" />
      <DescriptionCharacterInfos :character-infos="characterInfos" />
      <ComicsCharacterInfos :character-infos="characterInfos" />
      <SeriesCharacterInfos :character-infos="characterInfos" />
      <StoriesCharacterInfos :character-infos="characterInfos" />
    </div>
  </div>
</template>

<script>
import HeaderCharacterInfos from '@/components/character/contentContainer/HeaderCharacterInfos.vue'
import DescriptionCharacterInfos from '@/components/character/contentContainer/DescriptionCharacterInfos.vue'
import ComicsCharacterInfos from '@/components/character/contentContainer/ComicsCharacterInfos.vue'
import SeriesCharacterInfos from '@/components/character/contentContainer/SeriesCharacterInfos.vue'
import StoriesCharacterInfos from '@/components/character/contentContainer/StoriesCharacterInfos.vue'

export default {
  components: { HeaderCharacterInfos, DescriptionCharacterInfos, ComicsCharacterInfos, SeriesCharacterInfos, StoriesCharacterInfos },
  name: "CharacterInfosContainer",
  props: ["characterInfos"],
};
</script>

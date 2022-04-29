<template>
  <div class="p-2 w-full flex gap-2 mb-10 mx-auto flex-col bg-white rounded">
    <HeaderCharacterInfos :character-infos="characterInfos" />
    <DescriptionCharacterInfos :character-infos="characterInfos" />
    <ComicsCharacterInfos :character-infos="characterInfos" />
    <SeriesCharacterInfos :character-infos="characterInfos" />
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "CharacterInfosContainer",
  props: ["characterInfos"],
};
</script>

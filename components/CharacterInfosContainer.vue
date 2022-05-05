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
import Vue from "vue";

export default {
  name: "CharacterInfosContainer",
  props: ["characterInfos", "loading"],
};
</script>

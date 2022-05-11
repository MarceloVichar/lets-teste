<template>
  <div class="p-2 w-full flex mb-10 mx-auto flex-col bg-white rounded">
    <div class="flex flex-col gap-2">
      <HeaderCharacterInfos :character-infos="characterInfos" />
      <DescriptionCharacterInfos :character-infos="characterInfos" />
      <ListsContainer :infos="comics" :nameInfo="'Comics'" />
      <lists-container :infos="series" :nameInfo="'Series'" />
      <lists-container :infos="events" :nameInfo="'Events'" />
    </div>
  </div>
</template>

<script>
import HeaderCharacterInfos from "@/components/character/contentContainer/HeaderCharacterInfos.vue";
import DescriptionCharacterInfos from "@/components/character/contentContainer/DescriptionCharacterInfos.vue";
import ListsContainer from "@/components/character/contentContainer/ListsContainer.vue";
import Character from "@/services/api";

export default {
  components: {
    HeaderCharacterInfos,
    DescriptionCharacterInfos,
    ListsContainer,
  },
  name: "CharacterInfosContainer",
  props: ["characterInfos"],
  data() {
    return {
      comics: [],
      series: [],
      events: [],
    };
  },

  async fetch() {
    const id = this.$route.params?.id;
    await Character.content(id, "comics")
      .then((res) => {
        this.comics = res.data?.data?.results;
      })
      .catch((err) => {
        console.log(err);
      });

    await Character.content(id, "series")
      .then((res) => {
        this.series = res.data?.data?.results;
      })
      .catch((err) => {
        console.log(err);
      });

    await Character.content(id, "events")
      .then((res) => {
        this.events = res.data?.data?.results;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

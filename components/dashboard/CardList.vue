<template>
  <div class="w-full mx-auto flex flex-col">
    <CardCharacterContainer
      :loading="loading"
      :characters="characters"
      @onSearch="$emit('onSearch', $event)"
    />
    <ButtonSeeMoreCharacters
      v-if="!isLastPage"
      @onLoadMore="$emit('onLoadMore')"
    />
  </div>
</template>

<script>
import CardCharacterContainer from "@/components/dashboard/cardCharacterContainer/CardCharacterContainer.vue";
import ButtonSeeMoreCharacters from "@/components/dashboard/buttonSeeMoreCharacters/ButtonSeeMoreCharacters.vue";

export default {
  components: { CardCharacterContainer, ButtonSeeMoreCharacters },
  name: "CardList",
  props: ["characters", "loading", "isLastPage"],
};
</script>

<template>
  <div class="w-full mx-auto flex flex-col">
    <CardCharacterContainer
      :loading="loading"
      :characters-list="charactersList"
      @onSearch="$emit('onSearch', $event)"
    />
    <ButtonSeeMoreCharacters v-show="!isLastPage" @onLoadMore="$emit('onLoadMore')" />
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["charactersList", "loading", "isLastPage"],
};
</script>

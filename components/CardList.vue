<template>
  <div class="w-full mx-auto flex flex-col gap-4">
    <CardCharacterContainer
      :loading="loading"
      :characters-list="charactersList"
      @onSearch="$emit('onSearch', $event)"
    />
    <ButtonSeeMoreCharacters @onLoadMore="$emit('onLoadMore')" />
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["charactersList", "loading"],
};
</script>

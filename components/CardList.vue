<template>
  <div class="mx-auto flex flex-col gap-4">
    <CardCharacterContainer
      :characters-list="charactersList"
      @onSearch="$emit('onSearch', $event)"
    />
    <ButtonSeeMoreCharacters @onLoadMore="$emit('onLoadMore')" />
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["charactersList"],
};
</script>

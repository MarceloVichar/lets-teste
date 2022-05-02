<template>
  <div class="flex flex-col gap-4">
    <div>
      <img
        :src="character.thumbnail.path + '.' + character.thumbnail.extension"
        alt="personagem"
        class="h-48 w-96 rounded-lg"
      />
    </div>
    <div class="flex h-12">
      <h1 class="pl-2 text-xl text-left">
        {{ character.name }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfosCardCharacter",
  props: {
    character: Object,
  },
};
</script>

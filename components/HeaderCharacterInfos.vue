<template>
  <div
    class="flex w-full md:justify-between justify-center flex-col md:flex-row"
  >
    <div class="flex items-center m-10">
      <h1
        class="text-center md:text-left w-full font-bold lg:text-4xl md:text-2xl xl:text-8xl"
      >
        {{ this.characterInfos.name }}
      </h1>
    </div>
    <div class="flex justify-center">
      <img
        :src="
          characterInfos.thumbnail.path +
          '.' +
          characterInfos.thumbnail.extension
        "
        alt="img personagem"
        class="h-60 w-96 rounded-lg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCharacterInfos",
  props: ["characterInfos"],
};
</script>

<template>
  <div
    class="flex w-full md:justify-between justify-center flex-col md:flex-row"
  >
    <div class="flex flex-col">
      <nuxt-link to="/">
        <button
          class="border mb-2 px-2 h-12 rounded-md w-auto text-red-500 hover:text-white hover:bg-red-500 border border-2 border-red-500 hover:shadow-md  transition duration-300 ease-in-out"
          type="submit">
            <div class="flex justify-center items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
              <p>Back to home page</p>
            </div>
        </button>
      </nuxt-link>
      <div class="flex justify-center items-center  h-full">
        <h1
        class="text-center md:text-left w-full font-bold lg:text-4xl md:text-2xl xl:text-8xl"
      >
        {{ this.characterInfos.name }}
      </h1>
      </div>
    </div>
    <div class="flex justify-center">
      <img
        :src="
          characterInfos.thumbnail.path +
          '.' +
          characterInfos.thumbnail.extension
        "
        alt="img personagem"
        class="w-96 rounded-lg"
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

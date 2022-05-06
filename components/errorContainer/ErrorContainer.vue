<template>
  <div
    class="p-2 flex gap-2 mb-10 mx-auto flex-col bg-white rounded md:flex-row"
  >
    <div class="flex md:justify-start justify-center md:w-1/2">
      <img
        src="@/static/assets/hulk.jpg"
        alt="Erro 404"
        class=" max-w-100 h-auto rounded"
      />
    </div>
    <div class="flex flex-col gap-10">
      <h1 class="text-6xl md:text-left text-center">404 - page not found</h1>
      <p class="text-center">Something went wrong, go back to the home page</p>
      <nuxt-link to="/" class="flex justify-center">
        <button
          class="border mb-2 h-12 rounded-md w-3/4 text-white bg-red-500 hover:opacity-80 hover:shadow-md  transition duration-300 ease-in-out"
          type="submit">
          Back to home
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorContainer",
};
</script>

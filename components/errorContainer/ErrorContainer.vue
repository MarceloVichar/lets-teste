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
        <div class="w-3/4">
          <button
          class="border mb-2 h-12 rounded-md w-full text-red-500 hover:text-white hover:bg-red-500 border border-2 border-red-500 hover:shadow-md  transition duration-300 ease-in-out"
          type="submit">
            <div class="flex justify-center items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
              <p>Back to home page</p>
            </div>
        </button>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorContainer",
};
</script>

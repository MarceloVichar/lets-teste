<template>
  <div
    class="p-2 w-3/4 flex gap-2 mb-10 mx-auto flex-col bg-white rounded md:flex-row"
  >
    <div class="flex md:justify-start flex-justify-center">
      <img src="../assets/hulk.jpg" alt="Erro 404" class="w-100 h-60 rounded" />
    </div>
    <div class="flex flex-col gap-4">
      <h1 class="text-6xl md:text-left text-center">404 - page not found</h1>
      <p>Something went wrong, go back to the home page</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorContainer",
};
</script>

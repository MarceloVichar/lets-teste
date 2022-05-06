<template>
  <header class="flex items-center justify-center bg-black h-20 w-full">
    <div class="flex items-center justify-center">
      <nuxt-link to="/" class="cursor-pointer">
        <img src="@/static/assets/logo.png" class="w-auto h-12" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderContainer",
}
</script>

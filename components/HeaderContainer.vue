<template>
  <header class="flex items-center justify-center bg-black h-20 w-full">
    <div class="flex items-center justify-center">
      <div v-on:click="submit()" class="cursor-pointer">
        <img src="../static/assets/logo.png" class="w-auto h-12" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderContainer",
  methods: {
    submit() {
      this.$router.push({
        path: `/index`
      })
    }
  }
}
</script>

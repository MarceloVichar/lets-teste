<template>
  <main class="flex flex-col items-center gap-12 min-h-screen bg-red-750">
    <HeaderContainer />
    <Nuxt keep-alive />
  </main>
</template>

<script>
import HeaderContainer from '@/components/headerContainer/HeaderContainer.vue'

export default {
  components: { HeaderContainer },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
      ],
    };
  },
};
</script>

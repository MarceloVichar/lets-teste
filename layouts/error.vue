<template>
    <div class="container">
      <ErrorContainer />
    </div>
</template>

<script>
import ErrorContainer from '@/components/errorContainer/ErrorContainer.vue'

export default {
  components: { ErrorContainer },
  name: "error",
};
</script>

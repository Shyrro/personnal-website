<template>
  <div class="max-w-2xl mx-auto mt-2">
    <div
      class="title"
      w-full
      text-4xl
      text-center
      dark:text-shadow-contour
      text-primary
      dark:text-white
      v-motion-pop-visible-once
    >
      Professionnal experiences
    </div>
    <Experience v-for="experience in experiences" :experience="experience" />
  </div>
</template>

<script setup lang="ts">
const { data: experiences } = await useFetch("/api/experiences/all");
</script>
<style scoped>
.title {
  font-family: "Lobster";
}
</style>

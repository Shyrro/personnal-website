<template>
  <div class="max-w-3xl mx-auto mt-2">
    <div w-full flex justify-center py-4>
      <img
        w-16rem
        rounded-full
        border-6
        border-primary
        dark:border-dark-primary
        shadow-md
        dark:shadow-gray-500
        v-motion-pop-visible-once
        src="/imgs/profile_site.jpg"
      />
    </div>
    <div
      class="title"
      w-full
      text-5xl
      text-center
      dark:text-shadow-contour
      text-primary
      dark:text-white
      v-motion-slide-visible-once-bottom
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

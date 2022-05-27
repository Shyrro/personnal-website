<template>
  <div class="max-w-2xl mx-auto mt-2">
    <span class="title" text-4xl mx-auto><u>Professionnal experiences</u></span>
    <Experience v-for="experience in experiences" :experience="experience" />
  </div>
</template>

<script setup lang="ts">
const { data: experiences } = await useFetch("/api/experiences/all");
</script>
<style scoped>
.title {
  font-family: "Lobster";
  /* text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff; */
}
</style>

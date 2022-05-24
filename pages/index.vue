<template>
  <div>
    <div class="w-2xl mx-auto mt-2">
      <Experience v-for="experience in experiences" :experience="experience" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: experiences } = await useFetch("/api/experiences/all");
</script>

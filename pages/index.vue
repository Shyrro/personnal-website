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
     <div w-full flex flex-col justify-center py-4 v-motion-pop>
      <div text-4xl text-center lobster>Hi ! I'm <strong text-primary dark:text-dark-primary>Zak</strong> !</div>
      <div text-4xl text-center lobster text-primary dark:text-dark-primary> The greatest worst developer</div>
    </div>
    <div
      lobster
      w-full
      text-5xl
      text-center
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

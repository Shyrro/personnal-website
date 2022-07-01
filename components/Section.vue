<template>
  <div
    lobster
    w-full
    text-5xl
    text-center
    text-primary
    dark:text-white
    v-motion-slide-visible-once-bottom
  >
    {{ title }}
  </div>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps({
  title: "",
});
</script>

<template>
  <NuxtLayout name="custom">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  bodyAttrs: {
    class: "m-0 font-sans background bodyText cabin text-xl",
  },
});
</script>

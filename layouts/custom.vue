<template>
  <div @click="toggleDark()" h-20 border-b-3 borders sticky>
    <slot name="sidebar" />
  </div>
  <div flex flex-col p-4>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const toggleDark = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
<style scoped></style>

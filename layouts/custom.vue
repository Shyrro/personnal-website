<template>
  <div flex flex-col>
    <div @click="toggleDark()" class="h-20 border-b-3 borders">
      <slot name="sidebar" />
    </div>

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

<template>
  <span max-w-fit px-2 rounded flex items-center :class="iconBg">
    <span inline-flex :class="techlang.icon"></span>
    <span text-base ml-1>{{ techlang.name }}</span>
  </span>
</template>
<script setup lang="ts">
const props = defineProps({
  techlang: {
    type: Object as PropType<CodingLang>,
  },
});

const iconBg = computed(() => `bg-${props.techlang.color}`);
</script>
<style scoped></style>

<template>
  <div flex flex-row>
    <div class="min-h-screen w-80 bg-primary">
      <slot name="sidebar" />
    </div>
    <div w-screen>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

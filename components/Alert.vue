<template>
  <div class="bg-green-300">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    default: "orange",
  },
});
</script>

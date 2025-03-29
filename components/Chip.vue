<template>
  <UChip color="neutral" :standalone="false" text="netral" size="3xl">
    <!-- <UButton icon="i-lucide-mail" color="neutral" variant="subtle" /> -->
  </UChip>
</template>

<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    default: "orange",
  },
});
</script>

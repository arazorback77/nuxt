<template>
  <UBadge
    color="primary"
    variant="solid"
    size="md"
    trailing-icon="i-lucide-arrow-right"
    class="font-bold rounded-full"
    :label="text"
  >
    <slot></slot>
  </UBadge>
</template>

<script setup lang="ts">
const { text = "badge" } = defineProps<{
  text?: string;
}>();
</script>
<!-- :label="text" -->

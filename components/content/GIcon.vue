<template>
  <UIcon :name="name" :size="size" />
</template>

<script setup lang="ts">
const { size = 32 } = defineProps<{
  name: string;
  size?: number;
}>();
</script>

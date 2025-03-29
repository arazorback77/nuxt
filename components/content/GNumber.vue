<template>
  <ul class="grid grid-cols-[1fr_48px] items-center">
    <ProseLi>
      <slot></slot>
    </ProseLi>
    <UIcon :name="name" clase="bg-(--ui-primary)" :class="size" />
  </ul>
</template>

<script setup lang="ts">
const { size = "size-6" } = defineProps<{
  name: string;
  size?: string;
}>();
</script>

<template>
  <UTooltip
    :content="{
      align: 'start',
      side: 'top',
      sideOffset: 8,
    }"
    :text="text"
    :delay-duration="1"
    :ui="{
      content: 'bg-(--ui-bg-elevated) h-8 text-sm',
    }"
  >
    <UButton
      color="secondary"
      variant="soft"
      icon="i-lucide-lightbulb"
      size="xs"
      class="rounded-full"
    />
  </UTooltip>
</template>
<script setup lang="ts">
const { text } = defineProps<{
  text: string;
}>();
</script>

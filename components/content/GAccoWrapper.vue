<template>
  <UCard
    class="bg-(--ui-bg-muted) mt-2"
    :ui="{
      body: 'sm:py-2',
    }"
  >
    <AccordionRoot
      class="w-full border-neutral-400 px-2 pb-8"
      :default-value="defaultValue"
      :type="type"
      :collapsible="collapsible"
    >
      <slot></slot>
    </AccordionRoot>
  </UCard>
</template>

<script setup lang="ts">
const { type = "multiple", collapsible = true } = defineProps<{
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue: string | string[];
}>();
</script>

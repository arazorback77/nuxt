<script setup lang="ts">
const items = ref<("primary" | "secondary" | "success" | "warning")[]>([
  "primary",
  "secondary",
  "success",
  "warning",
]);
const value = ref<"primary" | "secondary" | "success" | "warning">("primary");

const items2 = ref<("solid" | "outline" | "subtle" | "soft")[]>([
  "solid",
  "soft",
  "outline",
  "subtle",
]);
const variant = ref<"solid" | "outline" | "subtle" | "soft">("solid");
</script>

<template>
  <USelect v-model="value" :items="items" class="w-48" />
  <USelect v-model="variant" :items="items2" class="w-48" />
  <UAlert
    :color="value"
    :variant="variant"
    title="Heads up!"
    description="You can change the primary color in your app config."
  >
  </UAlert>
</template>

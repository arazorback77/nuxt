<!-- :class="typeTwClass[type]" -->
<template>
  <AlertBase
    :title="title"
    :desc="desc"
    :variant="variant"
    color="error"
    icon="i-lucide-circle-x"
  />
</template>

<script setup lang="ts">
const { title = "Danger" } = defineProps<{
  title?: string;
  desc?: string;
  variant?: "solid" | "outline" | "soft" | "subtle";
  external?: boolean;
  inStack?: boolean;
  showLinkIcon?: boolean;
}>();
</script>

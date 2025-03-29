<!-- :class="typeTwClass[type]" -->
<template>
  <AlertBase
    :title="title"
    :desc="desc"
    :variant="variant"
    color="success"
    icon="i-lucide-lightbulb"
  />
</template>

<script setup lang="ts">
const { title = "Success" } = defineProps<{
  title?: string;
  desc?: string;
  variant?: "solid" | "outline" | "soft" | "subtle";
  external?: boolean;
  inStack?: boolean;
  showLinkIcon?: boolean;
}>();
</script>

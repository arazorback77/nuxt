<!-- :class="typeTwClass[type]" -->
<template>
  <UAlert
    :color="type"
    :variant="variant"
    :title="title"
    :description="desc"
    :icon="icon"
  />
</template>

<script setup lang="ts">
const {
  type = "primary",
  variant = "solid",
  icon = "i-lucide-info",
  external = undefined,
  inStack = false,
  showLinkIcon = true,
} = defineProps<{
  title?: string;
  desc?: string;
  icon?: string;
  type?:
    | "primary"
    | "info"
    | "warning"
    | "success"
    | "error"
    | "secondary"
    | "gof";
  variant?: "solid" | "outline" | "soft" | "subtle";
  external?: boolean;
  inStack?: boolean;
  showLinkIcon?: boolean;
}>();

const typeTwClass = {
  default: "",
  info: "border-sky-600 text-sky-600 [&>svg]:text-sky-600",
  note: "border-blue-700 text-blue-700 [&>svg]:text-blue-700",
  example: "border-violet-600 text-violet-600 [&>svg]:text-violet-600",
  warning: "border-amber-600 text-amber-600 [&>svg]:text-amber-600",
  success: "border-green-600 text-green-600 [&>svg]:text-green-600",
  danger: "border-red-600 text-red-600 [&>svg]:text-red-600",
  secondary: "bg-muted/50",
};
</script>

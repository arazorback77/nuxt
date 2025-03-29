<template>
  <NuxtLink
    :to="href"
    :target="target"
    :external="external"
    class="font-semibold underline underline-offset-4"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const { href = "", external = false } = defineProps<{
  href?: string;
  target?: string;
  external?: boolean;
}>();
</script>

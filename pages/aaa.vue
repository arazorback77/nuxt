<template>
  <div>
    <h2>AAA</h2>
    <UButton icon="i-lucide-rocket" size="md" color="primary" variant="solid"
      >Button</UButton
    >
    <NuxtLink to="/bbb">bbb</NuxtLink>
    <NuxtLink to="/">home</NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "goflayout",
});
</script>

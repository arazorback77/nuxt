<template>
  <div>
    <UBreadcrumb :items="items" class="z-10 pt-2" />
    <h2>AAA</h2>
    <Button icon="pi pi-user" severity="primary" aria-label="User" />
  </div>
</template>

<script setup lang="ts">
import items from "@/public/data/bread.json";

definePageMeta({
  layout: "goflayout2",
});

// const items = $fetch("/data/bread.json");
const itemss = ref([
  {
    label: "Home",
    icon: "i-lucide-house",
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/components",
  },
  {
    label: "Breadcrumb",
    icon: "i-lucide-link",
    to: "/components/breadcrumb",
  },
]);
</script>

<template>
  <!-- <div class="bg-[#020420]"> -->
  <div class="bg-gray-900">
    <h2>Home</h2>
    <UButton>GOF</UButton>
    <UButton color="gof">GOF gof</UButton>
    <UButton color="goff">GOF goff</UButton>
    <UButton color="error">GOF error </UButton>
    <UButton color="info">GOF info</UButton>
    <UButton color="warning">GOF warn</UButton>
    <UButton color="primary">GOF primary</UButton>
    <ColorModeButton></ColorModeButton>
  </div>

  <div>
    <h2 class="text-(--ui-gof)">inverted black</h2>
    <h2 class="text-(--ui-fg)">inverted black</h2>

    <NuxtLink to="/bbb">bbb</NuxtLink>
    <NuxtLink to="/aaa">aaaa</NuxtLink>
    <NuxtLink to="/prose">Prose</NuxtLink>
  </div>
</template>
<script setup lang="ts">
import { UButton } from "#components";

definePageMeta({
  // layout: "gof",
});
</script>

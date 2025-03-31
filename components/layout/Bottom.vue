<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const { prevNext } = defineProps<{
  prevNext: ContentNavigationItem[] | null;
}>();
</script>
<template>
  <div class="flex gap-4 mt-2">
    <UButton
      v-if="prevNext?.[0]"
      variant="outline"
      color="neutral"
      leading-icon="i-tabler-chevron-left"
      class="flex-1 py-4"
      :ui="{
        leadingIcon: 'w-8 h-8 text-(--ui-text-dimmed)',
      }"
    >
      <NuxtLink v-if="prevNext?.[0]" :to="prevNext[0].path">
        {{ prevNext[0].title }}
      </NuxtLink>
    </UButton>
    <div v-else class="flex-1 py-4"></div>
    <UButton
      v-if="prevNext?.[1]"
      variant="outline"
      color="neutral"
      trailing-icon="i-tabler-chevron-right"
      class="flex-1 py-4"
      :ui="{
        trailingIcon: 'w-8 h-8 text-(--ui-text-dimmed)',
      }"
    >
      <NuxtLink v-if="prevNext?.[1]" :to="prevNext[1].path" class="ml-auto">
        {{ prevNext[1].title }}
      </NuxtLink>
    </UButton>
    <div v-else class="flex-1 py-4"></div>
  </div>
</template>

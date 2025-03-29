<template>
  <div>
    <h2>AAA</h2>
    <UButton icon="i-lucide-rocket" size="md" color="primary" variant="solid"
      >Button</UButton
    >
    <NuxtLink to="/bbb">bbb</NuxtLink>
    <NuxtLink to="/">home</NuxtLink>
    <div>{{ navi }}</div>

    <ul v-if="navi">
      <li v-for="item in navi" :key="item.path">
        <NuxtLink :to="item.path">
          {{ item.title }}
          <span v-if="item.badge" class="badge">{{ item.badge }}</span>
        </NuxtLink>
        <p v-if="item.description">{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "goflayout",
});

const { data: navi } = await useAsyncData("navigation", () => {
  // return queryCollectionNavigation(collection.value)
  return queryCollectionNavigation("content");
});

import type { ContentNavigationItem } from "@nuxt/content";
import type { TreeItem } from "@nuxt/ui";

function convertToTreeItem(
  naviItem: ContentNavigationItem,
  index: number
): TreeItem {
  return {
    label: naviItem.title,
    defaultExpanded: index == 0 ? true : false,
    children: naviItem.children?.map((sub) => convertToTreeItem(sub, 1)),
  };
}
const res: TreeItem[] | null = navi.value?.map((aa, idx) =>
  convertToTreeItem(aa, idx)
);
</script>

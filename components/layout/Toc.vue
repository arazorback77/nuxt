<template>
  <div>
    <UTree
      v-model="value"
      :items="items"
      size="sm"
      collapsed-icon="i-lucide-ellipsis-vertical"
      expanded-icon="i-lucide-ellipsis-vertical"
    />
  </div>
</template>

<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import { convertTocLinkToTreeItem } from "#imports";

const route = useRoute();
const router = useRouter();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

const items: TreeItem[] = page.value?.body.toc?.links
  ? page.value?.body.toc?.links.map((aa, idx) =>
      convertTocLinkToTreeItem(route.path, aa, idx)
    )
  : [];

// const items: TreeItem[] = [];
const value = ref(items[items.length - 1]);
</script>

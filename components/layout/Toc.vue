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
import type { TocLink } from "@nuxt/content";
import type { Toc } from "@nuxt/content";
import type { TreeItem } from "@nuxt/ui";

const route = useRoute();
const router = useRouter();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

// const { data: page } = await useAsyncData(route.path, () => {
//   return queryCollection("kics_current").path(route.path).first();
// });

function convertTocLinkToTreeItem(
  route: string,
  toclink: TocLink,
  index: number
): TreeItem {
  return {
    label: toclink.text,
    value: route + "#" + toclink.id,
    defaultExpanded: true,
    children: toclink.children?.map((sub) =>
      convertTocLinkToTreeItem(route, sub, 1)
    ),
    onSelect: (e: Event) => {
      router.push(route + "#" + toclink.id);
    },
  };
}

const items: TreeItem[] = page.value?.body.toc?.links
  ? page.value?.body.toc?.links.map((aa, idx) =>
      convertTocLinkToTreeItem(route.path, aa, idx)
    )
  : [
      {
        label: "home",
      },
    ];
const value = ref(items[items.length - 1]);
</script>

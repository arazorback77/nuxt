<template>
  <div>
    <UTree
      v-model="value"
      :items="items"
      size="sm"
      collapsed-icon="i-tabler-square-rounded-plus"
      expanded-icon="i-tabler-square-rounded-minus"
    />
  </div>
</template>

<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import { convertTocLinkToTreeItem } from "#imports";
import type { Collections } from "@nuxt/content";
import bookversion from "@/public/data/bookversion.json";

const router = useRouter();
const route = ref(useRoute());
const slug = computed(() => route.value.path.split("/"));

const seletedVerState = useState<keyof Collections>("selectVersion");

// const { data: page } = await useAsyncData(route.value.path, () => {
//   return queryCollection(seletedVerState.value).path(route.value.path).first();
// });

const page = computed(() =>
  useAsyncData(route.value.path, () => {
    return queryCollection(seletedVerState.value)
      .path(route.value.path)
      .first();
  })
);

const items = computed<TreeItem[]>(() =>
  page.value.data.value?.body.toc?.links
    ? page.value.data.value?.body.toc?.links.map((aa, idx) =>
        convertTocLinkToTreeItem(route.value.path, aa, idx)
      )
    : []
);

// const items: TreeItem[] = [];
const value = ref(items.value[items.value.length - 1]);
</script>

<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import type {
  Collections,
  ContentNavigationItem,
  PageCollection,
} from "@nuxt/content";
import { convertNaviToTreeItem } from "#imports";
import bookversion from "@/public/data/bookversion.json";
import { Label } from "reka-ui";

const { books } = defineProps<{
  books: {
    label: string;
    path: string;
    collection: keyof Collections;
  }[];
}>();
const router = useRouter();
const route = useRoute();
const slug = route.path.split("/");

const intiversion = books.filter(
  (item) => item.path == "/" + slug.slice(1, 3).join("/")
)[0] ?? {
  label: "current",
  path: "/" + slug[1],
  collection: (slug[1] + "_current") as keyof Collections,
};

const selectedVersion = ref(intiversion);

const { data: navic } = await useAsyncData(
  selectedVersion.value.collection + "_nav",
  () => {
    // return queryCollectionNavigation(selectedVersion.value.collection);
    return queryCollectionNavigation(intiversion.collection);
  }
);
// const navic = computed(() =>
//   useAsyncData(selectedVersion.value.collection + "_nav", () => {
//     return queryCollectionNavigation(selectedVersion.value.collection);
//   })
// );

const treeItems =
  selectNaviNode(navic.value, selectedVersion.value.path)?.children?.map(
    (aa, idx) => convertNaviToTreeItem(aa, idx, router)
  ) || [];
// const treeItems = computed<TreeItem[]>(() => []);

const selectedTreeNode = ref();
</script>

<template>
  <div class="flex flex-col pb-2 px-4 border-b-1 border-gof-200">
    <!-- <div>
    </div> -->
    <div class="pl-2">Available versions</div>
    <USelect
      placeholder="Select version"
      v-model="selectedVersion.path"
      value-key="path"
      :items="books"
      class="w-full"
      highlight
      size="xs"
      icon="i-lucide-book"
      @change="router.push(selectedVersion.path)"
    >
    </USelect>
  </div>
  <div class="h-full overflow-y-auto">
    <UTree
      v-model="selectedTreeNode"
      :items="treeItems"
      size="md"
      class="pt-2"
    />
  </div>
</template>

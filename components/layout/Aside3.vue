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
import { tree } from "#build/ui";

const { collection, initSelect, books, treeItems } = defineProps<{
  collection: keyof Collections;
  initSelect: {
    label: string;
    path: string;
  };
  books: {
    label: string;
    path: string;
    collection: keyof Collections;
  }[];
  treeItems: TreeItem[] | undefined;
  // initVer: Ref<{
  //   label: string;
  //   path: string;
  //   collection: keyof Collections;
  // }>;
}>();

const router = useRouter();
const route = useRoute();
const slug = route.path.split("/");

const selections = books.map((s) => ({
  label: s.label,
  path: s.path,
}));
debugger;
const selectedVersion = ref(initSelect);

// const { data: nav } = await useAsyncData(collection.toString() + "_nav", () => {
//   console.log("call Navic in Asdie0 :" + collection.toString());
//   return queryCollectionNavigation(collection);
// });

// const treeItems = ref<TreeItem[]>();

// watch(
//   selectedVersion,
//   (newValue, oldValue) => {
//     console.log(
//       "zzzzz : " +
//         newValue +
//         ":" +
//         (nav.value != null ? nav.value[0].path : "zz")
//     );
//     treeItems.value =
//       selectNaviNode(nav.value, newValue)?.children?.map((aa, idx) =>
//         convertNaviToTreeItem(aa, idx, router)
//       ) || [];
//   },
//   { immediate: true, once: true }
// );

onMounted(() => console.log("Aside3 mounted"));
onUpdated(() => console.log("Aside3 updated :"));
onUnmounted(() => console.log("Aside3 unmounted:"));
// onRenderTracked((event) => {
//   console.log("onRenderTracked : " + event.type + ":::" + event.key + ":");
// });

// onRenderTriggered((event) => {
//   console.log("onRenderTriggered : " + event.type + ":" + event.target);
// });

const selectedTreeNode = ref();
</script>

<template>
  <div class="flex flex-col pb-2 px-4 border-b-1 border-gof-200">
    <NuxtLink to="/kics/intro/1-1" target="_blank">aaaaaaaaaaaa </NuxtLink>
    <div>{{ slug }} {{ route.path }} :::: {{ collection }}</div>
    <!-- <div>{{ initVer }}</div> -->
    <div>{{ initSelect }} ::: {{ selectedVersion }}</div>
    <div>&&&&</div>
    <div>{{ selectedVersion }}</div>
    <!-- <div>@@@@{{ navi }}</div> -->
    <!-- <div>@@@@{{ treeItems1 }}</div> -->
    <!-- <div>####{{ treeItems }}</div> -->
    <!-- <div>$$${{ nav }}</div> -->
    <div class="pl-2">Available versions</div>
    <USelect
      placeholder="Select version"
      v-model="selectedVersion.path"
      value-key="path"
      :items="selections"
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

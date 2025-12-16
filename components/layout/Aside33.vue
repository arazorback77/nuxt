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

const { collection, initSelect, books } = defineProps<{
  collection: keyof Collections;
  initSelect: string;
  books: {
    label: string;
    path: string;
    collection: keyof Collections;
  }[];
}>();

const router = useRouter();
const route = useRoute();
const slug = route.path.split("/");

const selections = books.map((s) => ({
  label: s.label,
  path: s.path,
}));

// const initversion = computed(
//   () =>
//     selections.filter(
//       (item) => item.path == "/" + slug.value.slice(1, 3).join("/")
//     )[0] ?? {
//       label: "current",
//       path: "/" + slug.value[1],
//       // collection: (slug.value[1] + "_current") as keyof Collections,
//     }
// );

const selectedVersion = ref(initSelect);

// const collection = ref(selectedVersion.value.collection);

// const { data: navic } = await useAsyncData(
//   selectedVersion.value.collection + "_nav",
//   () => {
//     // return queryCollectionNavigation(selectedVersion.value.collection);
//     console.log("call Navic in Asdie" + navic.value);
//     return queryCollectionNavigation(initversion.collection);
//   }
// );
// const { data: navic } = await useAsyncData(collection.value + "_nav", () => {
//   console.log("call Navic in Asdie01 :" + selectedVersion.value.path);
//   console.log("call Navic in Asdie11 :" + collection.value);
//   return queryCollectionNavigation(collection.value);
// });

const { data: nav } = await useAsyncData(collection.toString() + "_nav", () => {
  console.log("call Navic in Asdie0 :" + collection.toString());
  return queryCollectionNavigation(collection);
});

// const navi = ref<ContentNavigationItem[]>();
const treeItems = ref<TreeItem[]>();

// watchEffect(
//   async () => {
//     const { data: nav } = await useAsyncData(collection.value + "_nav", () => {
//       console.log("call Navic in Asdie0 :" + collection.value);
//       // return queryCollectionNavigation(selectedVersion.value.collection);
//       console.log("call Navic in Asdie1 :" + selectedVersion.value.collection);
//       return queryCollectionNavigation(selectedVersion.value.collection);
//     });
//     navi.value = (await nav.value) ?? undefined;
//     console.log(
//       "call Navic in Asdie2 :" + navi.value != undefined && navi.value != null
//         ? navi.value[0].title
//         : "aa"
//     );
//     treeItems1.value =
//       (await selectNaviNode(
//         navi.value,
//         selectedVersion.value.collection
//       )?.children?.map((aa, idx) => convertNaviToTreeItem(aa, idx, router))) ||
//       [];
//     console.log("zzzzz : " + treeItems1.value[0]);
//   }
//   // { immediate: true }
// );

watch(
  selectedVersion,
  (newValue, oldValue) => {
    console.log(
      "zzzzz : " +
        newValue +
        ":" +
        (nav.value != null ? nav.value[0].path : "zz")
    );
    treeItems.value =
      selectNaviNode(nav.value, newValue)?.children?.map((aa, idx) =>
        convertNaviToTreeItem(aa, idx, router)
      ) || [];
  },
  { immediate: true }
);

// watch(
//   () => navi.value,
//   (nav) => {
//     treeItems  =
//       selectNaviNode1(nav, selectedVersion.value.collection)?.children?.map(
//         (aa, idx) => convertNaviToTreeItem(aa, idx, router)
//       ) || [];
//   }
// );

// const treeItems = computed(
//   () =>
//     selectNaviNode1(
//       navi.value,
//       selectedVersion.value.collection
//     )?.children?.map((aa, idx) => convertNaviToTreeItem(aa, idx, router)) || []
// );

// watch(
//   [() => selectedVersion.value, () => collection.value],
//   ([path, collection]) => {
//     const { data: nav } = useAsyncData(collection + "_nav", () => {
//       console.log("call Navic in Asdie000:" + collection + ":");
//       // return queryCollectionNavigation(selectedVersion.value.collection);
//       console.log("call Navic in Asdie111 :" + collection);
//       return queryCollectionNavigation(collection);
//     });

//     navi.value = nav.value || undefined;
//     console.log("call Navic in Asdie222:" + nav.value);
//     treeItems.value =
//       selectNaviNode(nav.value, collection)?.children?.map((aa, idx) =>
//         convertNaviToTreeItem(aa, idx, router)
//       ) || [];
//   },
//   { immediate: true, flush: "sync" }
// );

// function selectNaviNode1(
//   naviItem: ContentNavigationItem[] | null | undefined,
//   path: string
// ): ContentNavigationItem | undefined {
//   if (naviItem) {
//     for (var nav of naviItem) {
//       if (nav.path == path) {
//         console.log("select nav in util: " + nav.path);
//         return nav;
//       } else {
//         if (nav.children) {
//           for (var child of nav.children) {
//             if (child.path == path) {
//               console.log("select child in util: " + child.path);
//               return child;
//             }
//           }
//         }
//       }
//     }
//   }
// }
// console.log("call Navic in Asdie3 :" + treeItems.value);

// watchEffect(async () => {
//   zzz.value = selectNaviNode(navic.value ?? [], collection.value);
//   console.log("watchEffect in Asdie" + navic.value + " : " + collection.value);
// });

// const initTreeItems =
//   selectNaviNode(navic.value ?? [], collection.value)?.children?.map(
//     (aa, idx) => convertNaviToTreeItem(aa, idx, router)
//   ) || [];

// const treeItems1 = ref(initTreeItems);

// watchEffect(async () => {
//   console.log("watchEffect in Asdie2" + navic.value);
//   treeItems1.value =
//     // selectNaviNode(navic.value, selectedVersion.value.path)?.children?.map(
//     selectNaviNode(navic.value ?? [], collection.value)?.children?.map(
//       (aa, idx) => convertNaviToTreeItem(aa, idx, router)
//     ) || [];
// });
// const treeItems1 = computed<TreeItem[]>(
//   () =>
//     selectNaviNode(navi.value ?? [], collection.value)?.children?.map(
//       (aa, idx) => convertNaviToTreeItem(aa, idx, router)
//     ) || []
// );

// const treeItems = // selectNaviNode(navic.value, selectedVersion.value.path)?.children?.map(
//   // selectNaviNode(navic.value, selectedVersion.value.path)?.children?.map(
//   selectNaviNode(navic.value ?? [], initversion.collection)?.children?.map(
//     (aa, idx) => convertNaviToTreeItem(aa, idx, router)
//   ) || [];

onMounted(() => console.log("Aside3 mounted"));
onUpdated(() => console.log("Aside3 updated"));
onRenderTracked((event) => {
  // debugger;
  console.log("onRenderTracked : " + event);
});

onRenderTriggered((event) => {
  debugger;
  console.log("onRenderTriggered : " + event);
});

const selectedTreeNode = ref();
</script>

<template>
  <div class="flex flex-col pb-2 px-4 border-b-1 border-gof-200">
    <div>{{ slug }} {{}}</div>
    <div>{{ initSelect }} {{ selectedVersion }}</div>
    <div>&&&&</div>
    <!-- <div>@@@@{{ navi }}</div> -->
    <!-- <div>@@@@{{ treeItems1 }}</div> -->
    <!-- <div>####{{ treeItems }}</div> -->
    <!-- <div>$$${{ nav }}</div> -->
    <div class="pl-2">Available versions</div>
    <USelect
      placeholder="Select version"
      v-model="selectedVersion"
      value-key="path"
      :items="selections"
      class="w-full"
      highlight
      size="xs"
      icon="i-lucide-book"
      @change="router.push(selectedVersion)"
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

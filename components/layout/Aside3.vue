<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import type { Collections, ContentNavigationItem } from "@nuxt/content";
import { convertNaviToTreeItem } from "#imports";

const router = useRouter();
const route = useRoute();

const slug = route.path.split("/");

const collectionCurrent = (slug[1] + "_current") as keyof Collections;
const collectionVersion = (slug[1] + "_versioned") as keyof Collections;

const { data: navic } = await useAsyncData("navigation1", () => {
  return queryCollectionNavigation(collectionCurrent);
});

const { data: naviv } = await useAsyncData("navigation2", () => {
  return queryCollectionNavigation(collectionVersion);
});

const navmap = new Map<string, ContentNavigationItem[]>();

if (naviv.value !== null && naviv.value[0].children) {
  for (const child of naviv.value[0].children) {
    navmap.set(child.path, child.children ? child.children : []);
  }
}

if (typeof navic.value !== "undefined" && navic.value !== null) {
  for (const aa of navic.value) {
    navmap.set(aa.path, aa.children ? aa.children : []);
  }
}

const selections = computed(() =>
  Array.from(navmap.keys()).map((path) => ({
    label: path == "/" + slug[1] ? "current" : path.split("/").pop(),
    value: path,
  }))
);

// const selections = Array.from(navmap.keys()).map((path) => ({
//   label: path == "/" + slug[1] ? "current" : path.split("/").pop(),
//   value: path,
// }));
const initVersion = Array.from(navmap.keys()).find(
  (e) => e == "/" + slug.slice(1, 3).join("/")
);

const selectedVersion = ref(initVersion == null ? "/" + slug[1] : initVersion);

// const treeItemsAll = new Map<string, TreeItem[]>();

// const treeItemsAll = Array.from(navmap.values()).map((aa, idx) => convertNaviToTreeItem(aa, idx, router)) || []

// for (const [key, value] of navmap) {
//   const treeNodes = value.map((s, idx) =>
//     convertNaviToTreeItem(s, idx, router)
//   );
//   treeItemsAll.set(key, treeNodes);
// }

const treeItems = computed<TreeItem[]>(
  () =>
    navmap
      .get(selectedVersion.value)
      ?.map((aa, idx) => convertNaviToTreeItem(aa, idx, router)) || []
);

const selectedTreeNode = ref();

// watch(route, async (to, from) => {
//   const initVersion1 = Array.from(navmap.keys()).find(
//     (e) => e == "/" + slug.slice(1, 3).join("/")
//   );
//   selectedVersion.value = initVersion1 == null ? "/" + slug[1] : initVersion1;
// });
</script>

<template>
  <!-- <div>
    {{ selectedVersion }}:::{{ initVersion }} :: {{ route.path }}::
    {{ route.params.slug }} ::
  </div>

  <ul v-for="item in navmap.keys()">
    <li>
      {{ item }}
    </li>
  </ul> -->
  <div class="flex flex-col pb-2 px-4 border-b-1 border-gof-200">
    <!-- <div>
    </div> -->
    <div class="pl-2">Available versions</div>
    <USelect
      placeholder="Select version"
      v-model="selectedVersion"
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

    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
  </div>
</template>

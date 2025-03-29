<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import type { Collections, ContentNavigationItem } from "@nuxt/content";
import { convertNaviToTreeItem } from "#imports";

const router = useRouter();
const route = useRoute();

// function convertToTreeItem(
//   naviItem: ContentNavigationItem,
//   index: number
// ): TreeItem {
//   const regexp = new RegExp(`(${naviItem.stem})/`, "gi");

//   return {
//     label: naviItem.title,
//     value: naviItem.path.replace(regexp, "/"),
//     icon: naviItem.children ? "" : "i-vscode-icons-file-type-markdown",
//     defaultExpanded: index == 0 ? true : false,
//     children: naviItem.children?.map((sub) => convertToTreeItem(sub, 1)),
//     onSelect: (e: Event) => {
//       router.push(naviItem.path.replace(regexp, "/"));
//     },
//   };
// }

// const { data: navi } = await useAsyncData("navigation", () => {
//   // return queryCollectionNavigation(collection.value)
//   return queryCollectionNavigation("content");
// });

// const collection = computed(() =>
//   route.path.split("/").length < 3
//     ? "docs"
//     : (route.path.split("/")[1] as keyof Collections)
// );

const collection = computed(() => {
  const slug = route.path.split("/");
  if (slug.length > 1 && slug[2].startsWith("v")) {
    return (slug[1] + "_versioned") as keyof Collections;
  } else if (slug.length > 1 && !slug[2].startsWith("v")) {
    return (slug[1] + "_current") as keyof Collections;
  } else {
    return "contents" as keyof Collections;
  }
});

const collectionName = route.path.startsWith("/kics/v")
  ? "kics_versioned"
  : "kics_current";

const { data: navic } = await useAsyncData("navigation2", () => {
  // return queryCollectionNavigation(collection.value)
  return queryCollectionNavigation("kics_current");
});

const { data: naviv } = await useAsyncData("navigation3", () => {
  // return queryCollectionNavigation(collection.value)
  return queryCollectionNavigation("kics_versioned");
});

const { data: navi } = await useAsyncData("navigation", () => {
  // return queryCollectionNavigation(collection.value)
  return queryCollectionNavigation(collection.value);
});

const items: TreeItem[] = navi.value
  ? navi.value?.map((aa, idx) => convertNaviToTreeItem(aa, idx, router))
  : [
      {
        label: "home",
      },
    ];

const value = ref(items[items.length - 1]);
</script>

<template>
  {{ route.path }}
  <!-- <p>{{ value.value }}</p> -->
  <!-- <p>&&&&&&&&&&&&&&&&&&&&&&&&&&&</p> -->
  <!-- <p>&&&&&&&&&&&&&&&&&&&&&&&&&&&</p> -->
  <!-- <p>{{ naviv }}</p> -->

  <UTree v-model="value" :items="items" size="md" />
</template>

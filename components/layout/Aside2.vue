<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import type { Collections, ContentNavigationItem } from "@nuxt/content";
import { convertNaviToTreeItem } from "#imports";
import type { RefSymbol } from "@vue/reactivity";

const router = useRouter();
const route = useRoute();

const slug = route.path.split("/");
const selectedVersion = ref("/" + slug.slice(1, 3).join("/"));
// const selectedVersion = ref("");

const collectionCurrent = (slug[1] + "_current") as keyof Collections;
const collectionVersion = (slug[1] + "_versioned") as keyof Collections;

// const collection = computed(() => {
//   if (
//     selectedVersion.value.split("/").length > 2 &&
//     selectedVersion.value.split("/")[2].startsWith("v")
//   ) {
//     return (selectedVersion.value.split("/")[1] +
//       "_versioned") as keyof Collections;
//   } else if (
//     selectedVersion.value.split("/").length > 2 &&
//     !selectedVersion.value.split("/")[2].startsWith("v")
//   ) {
//     return (selectedVersion.value.split("/")[1] +
//       "_current") as keyof Collections;
//   } else if ((selectedVersion.value.split("/").length = 2)) {
//     return (selectedVersion.value[1] + "_current") as keyof Collections;
//   } else {
//     return "contents" as keyof Collections;
//   }
// });

// const collectionVersion = computed(() => {
//   const slug = route.path.split("/");
//   if (slug.length > 1) {
//     return (slug[1] + "_versioned") as keyof Collections;
//   } else {
//     return "contents" as keyof Collections;
//   }
// });

const { data: navic } = await useAsyncData("navigation1", () => {
  return queryCollectionNavigation(collectionCurrent);
});

const { data: naviv } = await useAsyncData("navigation2", () => {
  return queryCollectionNavigation(collectionVersion);
});

// const navi = navic;
let xx: ContentNavigationItem[] = [];
if (naviv.value && naviv.value?.length > 0 && naviv.value[0].children) {
  xx = naviv.value[0].children;
}

let yy: ContentNavigationItem[] = [];
if (navic.value && navic.value?.length > 0) {
  yy = xx.concat(navic.value[0]);
}
const navi = yy;

const items = computed<TreeItem[]>(() =>
  navi
    ? navi
        .filter((s) => s.path == selectedVersion.value)
        .map((aa, idx) => convertNaviToTreeItem(aa, idx, router))
    : [
        {
          label: "home",
        },
      ]
);

// const filteredItems = ref(items.value[0].children);
// const filteredItems = computed(() => {
//   if (items.value && items.value[0] && items.value[0].children) {
//     return items.value[0].children;
//   } else {
//     return items;
//   }
// });
const filteredItems = items;

// const zz = naviv.value
//   ? naviv.value[0].children?.map((s) => {
//       return {
//         label: s.title,
//         value: s.path,
//       };
//     })
//   : [];
// zz?.push({ label: "current", value: "/" + slug[1] });

// const value = ref(filteredItems.value[filteredItems.value.length - 1]);
const value = ref();

// const selections = ref(["Backlog", "Todo", "In Progress", "Done"]);
// const selectedValue = ref("Backlog");
const selections = navi
  ? navi?.map((s) => {
      return {
        label: s.path == "/" + slug[1] ? "current" : s.path.split("/").pop(),
        value: s.path,
      };
    })
  : [{ label: "select version", value: "" }];
</script>

<template>
  <!-- {{ selectedVersion }} -->
  <!-- {{ navi.length }}:::; -->
  <!-- {{ collectionCurrent }} : {{ navic }} :: -->
  <!-- {{ navi ? navi[3].children?.length : "" }} -->
  <!-- {{ navi }} -->
  <!-- <p>{{ selections }}</p> -->

  <USelect
    v-model="selectedVersion"
    :items="selections"
    class="w-full"
    @change="router.push(selectedVersion)"
  >
  </USelect>
  <UTree v-model="value" :items="filteredItems" size="md" />
</template>

<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import type { Collections, ContentNavigationItem } from "@nuxt/content";
import { convertNaviToTreeItem } from "#imports";

const router = useRouter();
const route = useRoute();

const slug = route.path.split("/");
const selectedVersion = ref("/" + slug[0]);

const collection = computed(() => {
  if (slug.length > 2 && slug[2].startsWith("v")) {
    return (slug[1] + "_versioned") as keyof Collections;
  } else if (slug.length > 2 && !slug[2].startsWith("v")) {
    return (slug[1] + "_current") as keyof Collections;
  } else if ((slug.length = 2)) {
    return (slug[1] + "_current") as keyof Collections;
  } else {
    return "contents" as keyof Collections;
  }
});

const collectionVersion = computed(() => {
  const slug = route.path.split("/");
  if (slug.length > 1) {
    return (slug[1] + "_versioned") as keyof Collections;
  } else {
    return "contents" as keyof Collections;
  }
});

const { data: navi } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation(collection.value);
});

const { data: naviv } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation(collectionVersion.value);
});

const items = computed<TreeItem[]>(() =>
  navi.value
    ? navi.value?.map((aa, idx) => convertNaviToTreeItem(aa, idx, router))
    : [
        {
          label: "home",
        },
      ]
);

// const filteredItems = items.value[0].children;
const filteredItems = items;

const zz = naviv.value
  ? naviv.value[0].children?.map((s) => {
      return {
        label: s.title,
        value: s.path,
      };
    })
  : [];
zz?.push({ label: "current", value: "/" + slug[1] });

const value = ref(items.value[items.value.length - 1]);

// const selections = ref(["Backlog", "Todo", "In Progress", "Done"]);
// const selectedValue = ref("Backlog");
const selections = naviv.value
  ? naviv.value[0].children?.map((s) => {
      return {
        label: s.title,
        value: s.path,
      };
    })
  : [{ label: "select version", value: "" }];

selections?.push({ label: "current", value: "/" + slug[1] });
</script>

<template>
  <!-- {{ route.path }} -->
  <!-- {{ route.path.split("/") }} : {{ route.path.split("/").length }} -->
  <!-- <p>{{ value.value }}</p> -->
  <!-- <p>&&&&&&&&&&&&&&&&&&&&&&&&&&&</p> -->
  <!-- <p>{{ naviv }}</p> -->
  <!-- <p>&&&&&&&&&&&&&&&&&&&&&&&&&&&</p> -->
  {{ slug }}
  <p>{{ selections }}</p>
  <!-- <USelect v-model="selectedValue" :items="selections" class="w-48" /> -->
  <USelect
    v-model="selectedVersion"
    :items="selections"
    class="w-48"
    @change="router.push(selectedVersion)"
  >
  </USelect>
  <UTree v-model="value" :items="filteredItems" size="md" />
</template>

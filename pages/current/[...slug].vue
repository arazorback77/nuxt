<script setup lang="ts">
import { queryCollection, queryCollectionNavigation } from "#imports";
import type { Collections, ContentCollectionItem } from "@nuxt/content";

definePageMeta({
  layout: "goflayout2",
});

const route = useRoute();

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? (route.params.slug as string[])
    : [route.params.slug as string]
);

const collection = computed(() =>
  route.path.split("/").length < 3
    ? "docs"
    : (route.path.split("/")[1] as keyof Collections)
);

const { data: page } = await useAsyncData(route.path, () => {
  // const collectionName ="kics_current";
  // route.path.replace("kics/current", "kics");
  return queryCollection("kics_current")
    .path(route.path.replace("current/kics", "kics"))
    .first();
});

const { data: pageall } = await useAsyncData("all", () => {
  return queryCollection("kics_current").all();
});

// const headings =  page.value?.body.children.filter( (s)=> .value
// const hierarchize = (parent: [string, object, string], list: [[string, object, string]]) => {
//   const children = list.filter(x => x.parent == parent.code);
//   children.forEach(child => hierarchize(child, list));
//   parent.subRows = children;
// }

// const topLevel = mockData.filter(x => x.parent == "");
// topLevel.forEach(top => hierarchize(top, mockData));

const items = ref([
  {
    label: "Home",
    icon: "i-lucide-house",
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    to: "/components",
  },
  {
    label: "Breadcrumb",
    icon: "i-lucide-link",
    to: "/components/breadcrumb",
  },
]);
</script>

<template>
  <UBreadcrumb :items="items" class="z-10" />
  <ContentRenderer v-if="page" :value="page" />
  <p>&&&&&&&&&&&{{ route.path }} Current $$$$$$$$$$$$$$$$$$$$$$$</p>
  <div>
    <ul v-for="item in pageall">
      <li>{{ item.path }} +{{ item.navigation }} + {{ item }}</li>
    </ul>
  </div>
  {{ pageall }}
</template>

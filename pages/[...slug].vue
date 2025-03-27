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

// const { data: page } = await useAsyncData(route.path, () => {
//   return queryCollection("content").path(route.path).first();
// });

const { data: kicsv } = await useAsyncData(route.path + "-v", () => {
  return (
    queryCollection("kics_versioned")
      .path(route.path)
      // .path(route.path.replace("kics/current", "kics"))
      .first()
  );
});

const { data: kicsc } = await useAsyncData(route.path + "-c", () => {
  return (
    queryCollection("kics_current")
      .path(route.path)
      // .path(route.path.replace("kics", "kics/current"))
      .first()
  );
});
const { data: content } = await useAsyncData("content", () => {
  return queryCollection("content").path(route.path).first();
});

const { data: compc } = await useAsyncData("comp-c", () => {
  return queryCollection("comp_current").path(route.path).first();
});

const { data: compv } = await useAsyncData("comp-v", () => {
  return queryCollection("comp_versioned").path(route.path).first();
});
// const { data: pageall } = await useAsyncData("all", () => {
//   return queryCollection("kics_versioned").all();
// });
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
  <UBreadcrumb :items="items" class="z-10 pt-2" />
  <ContentRenderer v-if="kicsv" :value="kicsv" />
  <ContentRenderer v-if="kicsc" :value="kicsc" />
  <ContentRenderer v-if="content" :value="content" />
  <ContentRenderer v-if="compc" :value="compc" />
  <ContentRenderer v-if="compv" :value="compv" />

  <p>&&&&&&&&&&&&&&&&{{ route.path }}& Kics $$$$$$$$$$$$$$$$$$$$$$$</p>
  <div>KICS_V : {{ kicsv?.path }} $$$ KICS_C {{ kicsc?.path }}</div>
  <p>&&&&&&&&&&&&&&&&{{ route.path }}& comp $$$$$$$$$$$$$$$$$$$$$$$</p>
  <div>Comp_V : {{ compv?.path }} && comp_C : {{ compc?.path }}</div>

  <!-- <div>
    <ul v-for="item in pageall">
      <li>{{ item.path }} +{{ item.navigation }} + {{ item }}</li>
    </ul>
    {{ pageall }}
  </div> -->
</template>

<script setup lang="ts">
import { queryCollection, queryCollectionNavigation } from "#imports";
import type { Collections, ContentCollectionItem } from "@nuxt/content";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import items from "@/public/data/bread.json";

definePageMeta({
  layout: "goflayout3",
});
const router = useRouter();
const route = useRoute();

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? (route.params.slug as string[])
    : [route.params.slug as string]
);

const collection = computed(() =>
  route.path.split("/").length < 3
    ? "content"
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

const { data: prevNext } = await useAsyncData("surround", () => {
  return queryCollectionItemSurroundings(collection.value, route.path);
});
</script>

<template>
  <UBreadcrumb :items="items" class="z-10 pt-2" />

  <ContentRenderer v-if="kicsv" :value="kicsv" />
  <ContentRenderer v-if="kicsc" :value="kicsc" />
  <ContentRenderer v-if="content" :value="content" />
  <ContentRenderer v-if="compc" :value="compc" />
  <ContentRenderer v-if="compv" :value="compv" />

  <!-- <div class="flex justify-between gap-4 mt-2">
        <div
          class="flex-1 py-4 rounded-md ring-1 ring-(--ui-border-muted) group"
        >
          <GIconSvg
            v-if="prevNext?.[0]"
            name="i-tabler-chevron-left"
          ></GIconSvg>
          <NuxtLink v-if="prevNext?.[0]" :to="prevNext[0].path">
            {{ prevNext[0].title }}
          </NuxtLink>
        </div>
        <div
          class="flex-1 py-4 rounded-sm ring-1 ring-(--ui-border-muted) group"
        >
          <NuxtLink
            v-if="prevNext?.[1]"
            :to="prevNext[1].path"
            class="ml-auto rounded-sm ring-1 ring-(--ui-border-muted)"
          >
            {{ prevNext[1].title }}
          </NuxtLink>
          <GIconSvg
            v-if="prevNext?.[1]"
            name="i-tabler-chevron-right"
          ></GIconSvg>
        </div>
      </div>

      <div class="flex justify-between gap-4 mt-2 items-center">
        <NuxtLink
          v-if="prevNext?.[0]"
          :to="prevNext[0].path"
          class="flex-1 rounded-sm ring-1 ring-(--ui-border-muted) py-4 items-center"
        >
          <div class="flex items-center px-2">
            <GIconSvg
              v-if="prevNext?.[0]"
              name="i-tabler-chevron-left"
            ></GIconSvg>
            {{ prevNext[0].title }}
          </div>
        </NuxtLink>

        <NuxtLink
          v-if="prevNext?.[1]"
          :to="prevNext[1].path"
          class="flex flex-1 rounded-sm ring-1 ring-(--ui-border-muted) py-4 justify-end items-center"
        >
          <div class="flex justify-end items-center px-2">
            {{ prevNext[1].title }}
            <GIconSvg
              v-if="prevNext?.[1]"
              name="i-tabler-chevron-right"
            ></GIconSvg>
          </div>
        </NuxtLink>
      </div> -->

  <div class="flex gap-4 mt-2">
    <UButton
      v-if="prevNext?.[0]"
      variant="outline"
      color="neutral"
      leading-icon="i-tabler-chevron-left"
      class="flex-1 py-4"
      :ui="{
        leadingIcon: 'w-8 h-8 text-(--ui-text-dimmed)',
      }"
    >
      <NuxtLink v-if="prevNext?.[0]" :to="prevNext[0].path">
        {{ prevNext[0].title }}
      </NuxtLink>
    </UButton>
    <div v-else class="flex-1 py-4"></div>
    <UButton
      v-if="prevNext?.[1]"
      variant="outline"
      color="neutral"
      trailing-icon="i-tabler-chevron-right"
      class="flex-1 py-4"
      :ui="{
        trailingIcon: 'w-8 h-8 text-(--ui-text-dimmed)',
      }"
    >
      <NuxtLink v-if="prevNext?.[1]" :to="prevNext[1].path" class="ml-auto">
        {{ prevNext[1].title }}
      </NuxtLink>
    </UButton>
    <div v-else class="flex-1 py-4"></div>
  </div>

  <p>&&&&&&&&&&&&&&&&{{ route.path }}& Kics $$$$$$$$$$$$$$$$$$$$$$$</p>
  <div>KICS_V : {{ kicsv?.path }} $$$ KICS_C {{ kicsc?.path }}</div>
  <p>&&&&&&&&&&&&&&&&{{ route.path }}& comp $$$$$$$$$$$$$$$$$$$$$$$</p>
  {{ router }}

  <div>Comp_V : {{ compv?.path }} && comp_C : {{ compc?.path }}</div>

  <!-- <div>
    <ul v-for="item in pageall">
      <li>{{ item.path }} +{{ item.navigation }} + {{ item }}</li>
    </ul>
    {{ pageall }}
  </div> -->
</template>

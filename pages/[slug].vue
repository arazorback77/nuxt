<script setup lang="ts">
import { queryCollection, queryCollectionNavigation } from "#imports";
import type { Collections, ContentCollectionItem } from "@nuxt/content";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import items from "@/public/data/bread.json";

const panelRef = useTemplateRef<InstanceType<typeof SplitterPanel>>("panelRef");
// provide("panelRef", panelRef);

definePageMeta({
  layout: "default",
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
  <nav
    class="bg-(--gofhead) grid grid-cols-[minmax(215px,0.2fr)_48px_1fr_minmax(200px,0.5fr)_120px] sticky top-0 h-12 z-100 items-center"
  >
    <LayoutTopLogo></LayoutTopLogo>
    <div>
      <UButton
        v-if="panelRef?.isCollapsed"
        icon="i-lucide-chevron-right"
        size="md"
        color="primary"
        variant="solid"
        class="rounded-full"
        @click="panelRef?.expand()"
      />

      <UButton
        v-else
        icon="i-lucide-chevron-left"
        size="md"
        color="primary"
        variant="solid"
        class="rounded-full"
        @click="panelRef?.collapse()"
      />
    </div>
    <LayoutTopCenter2></LayoutTopCenter2>
    <LayoutTopRight></LayoutTopRight>

    <div class="flex flex-row items-center justify-evenly">
      <ColorModeButton></ColorModeButton>
      <SignedOut>
        <SignInButton>
          <UButton
            icon="i-lucide-user"
            variant="solid"
            size="md"
            class="rounded-full font-bold bg-(--gofhead-accent)"
            :ui="{
              // leadingIcon: 'text-(--gofhead)',
              leadingIcon: 'text-(--ui-text)',
            }"
          ></UButton>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton> </UserButton>
      </SignedIn>
    </div>
  </nav>
  <SplitterGroup
    direction="horizontal"
    class="h-full min-h-[calc(200vh-100px)] !overflow-visible"
  >
    <SplitterPanel
      ref="panelRef"
      collapsible
      :default-size="20"
      :collapsed-size="0"
      :min-size="0"
      class="sticky top-[60px] h-[calc(100vh-88px)]"
    >
      <LayoutAside3></LayoutAside3>
    </SplitterPanel>
    <SplitterResizeHandle class="w-0.5 bg-(--ui-border) hover:w-2" />
    <SplitterPanel :default-size="65" class="px-20">
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
    </SplitterPanel>
    <SplitterResizeHandle class="w-0.5 bg-(--ui-border) hover:w-2" />

    <SplitterPanel
      :default-size="15"
      class="sticky top-[60px] h-[calc(100vh-88px)]"
    >
      Right
      <LayoutToc></LayoutToc>
    </SplitterPanel>
  </SplitterGroup>

  <!-- <div>
    <ul v-for="item in pageall">
      <li>{{ item.path }} +{{ item.navigation }} + {{ item }}</li>
    </ul>
    {{ pageall }}
  </div> -->
</template>

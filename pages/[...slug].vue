<script setup lang="ts">
import { queryCollection, queryCollectionNavigation } from "#imports";
import type { Collections } from "@nuxt/content";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import items from "@/public/data/bread.json";
import bookversion from "@/public/data/bookversion.json";

definePageMeta({
  // layout: "goflayout2",
  layout: "default",
});
const router = useRouter();
const route = useRoute();
const slug = route.path.split("/");

const selections = bookversion
  .filter((book) => book.name.toLocaleLowerCase() == slug[1])
  .flatMap((book) =>
    book.versions.map((version) => ({
      label: version,
      path:
        version == "current"
          ? "/" + book.name.toLocaleLowerCase()
          : "/" + book.name.toLocaleLowerCase() + "/" + version,
      collection: (version == "current"
        ? slug[1] + "_current"
        : slug[1] + "_versioned") as keyof Collections,
    }))
  );

const intiversion = selections.filter(
  (item) => item.path == "/" + slug.slice(1, 3).join("/")
)[0] ?? {
  label: "current",
  path: "/" + slug[1],
  collection: (slug[1] + "_current") as keyof Collections,
};

const { data: page } = await useAsyncData(route.path + "-v", () => {
  return queryCollection(intiversion.collection).path(route.path).first();
});

const { data: prevNext } = await useAsyncData("surround", () => {
  return queryCollectionItemSurroundings(intiversion.collection, route.path);
});

const panelRef = useTemplateRef<InstanceType<typeof SplitterPanel>>("panelRef");
</script>

<template>
  <nav
    class="bg-(--gofhead) grid grid-cols-[minmax(240px,0.18fr)_48px_1fr_minmax(200px,0.5fr)_120px] sticky top-0 h-12 z-100 items-center"
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
      >
      </UButton>
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
      <!-- <slot name="leftside"></slot> -->
      <!-- <LayoutAside3 :books="selections"></LayoutAside3> -->
      <LayoutAside32 </LayoutAside32>
    </SplitterPanel>
    <SplitterResizeHandle class="w-0.5 bg-(--ui-border) hover:w-2" />
    <SplitterPanel :default-size="65" class="px-20">
      <UBreadcrumb :items="items" class="z-10 pt-2" />
      <ContentRenderer v-if="page" :value="page" />
      <LayoutBottom :prevNext="prevNext" />
    </SplitterPanel>
    <SplitterResizeHandle class="w-0.5 bg-(--ui-border) hover:w-2" />

    <SplitterPanel
      :default-size="15"
      class="sticky top-[60px] h-[calc(100vh-88px)]"
    >
      {{ slug }}
      Right Goflayout2
      {{ intiversion }} {{ selections }}
      <LayoutToc></LayoutToc>
    </SplitterPanel>
  </SplitterGroup>

  <!-- <ContentRenderer v-if="kicsv" :value="kicsv" />
  <ContentRenderer v-if="kicsc" :value="kicsc" />
  <ContentRenderer v-if="content" :value="content" />
  <ContentRenderer v-if="compc" :value="compc" />
  <ContentRenderer v-if="compv" :value="compv" /> -->

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

  <!-- <div>
    <ul v-for="item in pageall">
      <li>{{ item.path }} +{{ item.navigation }} + {{ item }}</li>
    </ul>
    {{ pageall }}
  </div> -->
</template>

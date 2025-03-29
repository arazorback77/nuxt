<script setup lang="ts">
import { queryCollection, queryCollectionNavigation } from "#imports";
import type { Collections, ContentCollectionItem } from "@nuxt/content";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import items from "@/public/data/bread.json";

const panelRef = useTemplateRef<InstanceType<typeof SplitterPanel>>("panelRef");

provide("panelRef", panelRef);

const sideToggle = useState("sideToggle");

const bbb = toValue(panelRef)?.isCollapsed
  ? toValue(panelRef)?.expand()
  : toValue(panelRef)?.collapse();

// const btnSide = useState("left");
// const btnSide = computed<string>(() => {
//   return toValue(panelRef)?.isCollapsed ? "Expand" : "Collapse";
// });

function toggleSide(event: Event) {
  alert("aaaaa" + bbb);
  toValue(panelRef)?.isCollapsed
    ? toValue(panelRef)?.expand()
    : toValue(panelRef)?.collapse();
}

definePageMeta({
  layout: "default",
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
// const items = $fetch("/data/bread.json");
// const items = ref([
//   {
//     label: "Home",
//     icon: "i-lucide-house",
//   },
//   {
//     label: "Components",
//     icon: "i-lucide-box",
//     to: "/components",
//   },
//   {
//     label: "Breadcrumb",
//     icon: "i-lucide-link",
//     to: "/components/breadcrumb",
//   },
// ]);
function aaa(event: Event) {
  alert(panelRef + ": " + sideToggle.value + bbb);
  toValue(panelRef)?.isCollapsed
    ? toValue(panelRef)?.expand()
    : toValue(panelRef)?.collapse();
}
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

      <p>&&&&&&&&&&&&&&&&{{ route.path }}& Kics $$$$$$$$$$$$$$$$$$$$$$$</p>
      <div>KICS_V : {{ kicsv?.path }} $$$ KICS_C {{ kicsc?.path }}</div>
      <p>&&&&&&&&&&&&&&&&{{ route.path }}& comp $$$$$$$$$$$$$$$$$$$$$$$</p>
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

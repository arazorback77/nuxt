<script setup lang="ts">
import { queryCollection, queryCollectionNavigation } from "#imports";
import type { Collections } from "@nuxt/content";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
import items from "@/public/data/bread.json";
import bookversion from "@/public/data/bookversion.json";
import type { TreeItem } from "@nuxt/ui";

import type { ContentNavigationItem } from "@nuxt/content";

definePageMeta({
  // layout: "goflayout2",
  layout: "default",
  validate: () => {
    console.log("validate  route");
    return true;
  },
});
const router = useRouter();
const routeaa = useRoute();
// const route = computed(() => routeaa.path);
const route = { value: routeaa.path };
// const slug = ref(route.value.split("/"));
const slug = { value: route.value.split("/") };
debugger;
const selections = computed(() =>
  bookversion
    .filter((book) => book.name.toLocaleLowerCase() == slug.value[1])
    .flatMap((book) =>
      book.versions.map((version) => ({
        label: version,
        path:
          version == "current"
            ? "/" + book.name.toLocaleLowerCase()
            : "/" + book.name.toLocaleLowerCase() + "/" + version,
        collection: (version == "current"
          ? slug.value[1] + "_current"
          : slug.value[1] + "_versioned") as keyof Collections,
      }))
    )
);
type MyNode = {
  label: string;
  path: string;
  collection: keyof Collections;
};

const initversion = computed<{
  label: string;
  path: string;
  collection: keyof Collections;
}>(
  () =>
    selections.value.filter(
      (item) => item.path == "/" + slug.value.slice(1, 3).join("/")
    )[0] ?? {
      label: "current",
      path: route.value,
      collection: (slug.value[1] + "_current") as keyof Collections,
    }
);
debugger;
const initSel = computed<{
  label: string;
  path: string;
}>(
  () =>
    selections.value
      .filter((item) => item.path == "/" + slug.value.slice(1, 3).join("/"))
      .map((s) => ({
        label: s.label,
        path: s.path,
      }))[0] ?? {
      label: "current",
      path: route.value,
    }
);

const coll = ref(initversion.value.collection);
// const initSel = ref(initversion.value.path);

const treeItems = ref<TreeItem[]>();

// debugger;
const { data: navi } = await useAsyncData(
  coll.value + "_nav",
  () => {
    console.log("call Navic in Asdie1 :" + coll.value);
    return queryCollectionNavigation(coll.value);
    // return queryCollectionNavigation(initversion.value.collection);
  },
  {
    watch: [coll],
  }
);

// const nav = reactive<ContentNavigationItem[]>(navi.value ?? []);

// const treeItems = ref<TreeItem[]>();
// debugger;
watchEffect(() => {
  // console.log("watcheffect :" + route.value + navi.value?.[0].title);
  console.log("watcheffect :" + coll.value);
  // const selectNode = selectNaviNode(nav, route.value);

  treeItems.value =
    navi.value?.[0].children?.map((aa, idx) =>
      convertNaviToTreeItem2(aa, idx)
    ) || [];
  // selectNaviNode(nav, route.value)?.children?.map((aa, idx) => convertNaviToTreeItem2(aa, idx)) ||
  //   [
  //     { label: "aa", value: "/" },
  //     { label: "bb", value: "/kics" },
  //   ];
  // treeItems.value.push({ label: route.value, value: route.value });
});

const wat = ref("");
watch(
  // () => navi.value,
  coll,
  // navi,
  (newNav) => {
    console.log("watch Route : " + ":" + ":" + newNav);
    wat.value = newNav;
    // treeItems.value =
    //   newNav?.[0].children?.map((aa, idx) => convertNaviToTreeItem2(aa, idx)) ||
    //   [];
    // navi.value?.[0].children?.map((aa, idx) => convertNaviToTreeItem2(aa, idx)
    // ) || [];

    // const qqq = queryCollectionNavigation(newNav);
    // qqq.then((zz) => {
    //   treeItems.value =
    //     zz?.[0].children?.map((aa, idx) => convertNaviToTreeItem2(aa, idx)) ||
    //     [];
    // });
  },
  { immediate: true }
);

// const treeItems = computed(
//   () =>
//     selectNaviNode(nav.value, route.value)?.children?.map((aa, idx) =>
//       convertNaviToTreeItem2(aa, idx)
//     ) || []
// );

const { data: page } = await useAsyncData(
  route.value + "-v",
  () => {
    console.log("call page in Asdie0 :" + route.value);
    return queryCollection(initversion.value.collection)
      .path(route.value)
      .first();
  },
  {
    // watch: [route],
  }
);

// console.log("compute :" + route.value);
function convertNaviToTreeItem2(
  naviItem: ContentNavigationItem,
  index: number
  // router: Router
): TreeItem {
  return {
    label: naviItem.title,
    value: naviItem.path,
    icon: naviItem.children ? "" : "i-tabler-file-type-doc",
    // defaultExpanded: index == 0 ? true : false,
    children: naviItem.children?.map((sub) =>
      convertNaviToTreeItem(sub, 1, router)
    ),
    onToggle: (e: Event) => {},
    // to: naviItem.path,
    onSelect: (e: Event) => {
      // console.log("treenode" + naviItem.path + ":" + e);
      // alert("treenode " + naviItem.path + ":" + e);
      // router.push(naviItem.path.replace(regexp, "/"));
      // naviItem.page ? router.push(naviItem.path) : "";
      // if (naviItem.page != false) {
      router.push(naviItem.path);
      // }
    },
  };
}
// const treeItems =
//   selectNaviNode(nav.value, route.path)?.children?.map((aa, idx) =>
//     convertNaviToTreeItem(aa, idx, router)
//   ) || [];

const { data: prevNext } = await useAsyncData(
  "surround",
  () => {
    console.log(
      "call Surround in Asdie2 :" +
        route.value +
        ":" +
        initversion.value.collection
    );
    return queryCollectionItemSurroundings(
      initversion.value.collection,
      route.value
    );
  },
  {
    watch: [initversion],
  }
);

const panelRef = useTemplateRef<InstanceType<typeof SplitterPanel>>("panelRef");
// debugger;
onMounted(() => console.log("Page mounted"));
onUpdated(() => console.log("Page updated"));
onUnmounted(() => console.log("Page unmouted"));
</script>

<template>
  <div>
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
        <ULink to="/kics/intro/1-1">ULink</ULink>
        <NuxtLink to="/kics/valuation">link kics </NuxtLink>
        <!-- <slot name="leftside"></slot> -->
        <LayoutAside3
          :collection="coll"
          :initSelect="initSel"
          :books="selections"
          :treeItems="treeItems"
        ></LayoutAside3>

        <!-- <LayoutAside3> </LayoutAside3> -->
        <!-- <LayoutAside32> </LayoutAside32> -->
      </SplitterPanel>
      <SplitterResizeHandle class="w-0.5 bg-(--ui-border) hover:w-2" />
      <SplitterPanel :default-size="65" class="px-20">
        <UBreadcrumb :items="items" class="z-10 pt-2" />
        <!-- <ContentRenderer v-if="page" :value="page" /> -->
        <template v-if="page">
          {{ wat }} :: {{ slug }}
          <div>{{ treeItems }}</div>
          <ContentRenderer :value="page" />
        </template>
        <template v-else>
          <div class="empty-page">
            <h1>Page Not Found</h1>
            <p>Oops! The content you're looking for doesn't exist.</p>
            <NuxtLink to="/">Go back home</NuxtLink>
          </div>
        </template>

        <LayoutBottom :prevNext="prevNext" />
        <!-- <div>{{ treeItems }}</div> -->
        :::::
        <!-- <div>{{ nav }}</div> -->
      </SplitterPanel>
      <SplitterResizeHandle class="w-0.5 bg-(--ui-border) hover:w-2" />

      <SplitterPanel
        :default-size="15"
        class="sticky top-[60px] h-[calc(100vh-88px)]"
      >
        <div>
          {{ slug }} ::::: {{ route }}
          ####
        </div>
        <div>
          {{ initversion }}
          ####
        </div>
        <div>
          {{ selections }}
        </div>
        <div></div>
        <LayoutToc></LayoutToc>
      </SplitterPanel>
    </SplitterGroup>
  </div>
  <!-- <ContentRenderer v-if="kicsv" :value="kicsv" />
  <ContentRenderer v-if="kicsc" :value="kicsc" />
  <ContentRenderer v-if="content" :value="content" />
  <ContentRenderer v-if="compc" :value="compc" />
  <ContentRenderer v-if="compv" :value="compv" /> -->

  <!-- <div>
    <ul v-for="item in pageall">
      <li>{{ item.path }} +{{ item.navigation }} + {{ item }}</li>
    </ul>
    {{ pageall }}
  </div> -->
</template>

<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";
import type { Collections, ContentNavigationItem } from "@nuxt/content";
import { convertNaviToTreeItem } from "#imports";
import bookversion from "@/public/data/bookversion.json";
import type { version } from "vue";

const router = useRouter();
const route = ref(useRoute());

const slug = computed(() => route.value.path.split("/"));
const slug1 = ref(route.value.path.split("/"));
const slug2 = route.value.path.split("/");

const selections = computed(() =>
  bookversion
    .filter(
      (book) =>
        book.name.toLocaleLowerCase() == slug.value[1].toLocaleLowerCase()
    )
    .flatMap((book) =>
      book.versions.map((version) => ({
        label: version,
        path:
          version == "current"
            ? "/" + book.name.toLocaleLowerCase()
            : "/" + book.name.toLocaleLowerCase() + "/" + version,
        // collection:
        //   version == "current"
        //     ? slug.value[1] + "_current"
        //     : slug.value[1] + "_versioned",
      }))
    )
);
// const intiversion = selections.value
//   .filter((item) => item.path == "/" + slug.value.slice(1, 3).join("/"))
//   .map((item) => item.path)[0];
// const intiversion = computed(
//   () =>
//     selections.value
//       .filter((item) => item.path == "/" + slug.value.slice(1, 3).join("/"))
//       .map((item) => item.path)[0]
// );

const init = computed(
  () =>
    selections.value.filter(
      (item) => item.path == "/" + slug.value.slice(1, 3).join("/")
    )[0] ?? {
      label: "current",
      path: "/" + slug.value[1],
      // collection: slug.value[1] + "_versioned",
    }
);

const selectedVersion1 = ref(
  selections.value.filter(
    (item) => item.path == "/" + slug.value.slice(1, 3).join("/")
  )[0] ?? {
    label: "current",
    path: "/" + slug.value[1],
    // collection: slug.value[1] + "_versioned",
  }
);

const selectedVersion = ref(init);

const collection = computed(
  () =>
    (selectedVersion.value.label == "current"
      ? slug.value[1] + "_current"
      : slug.value[1] + "_versioned") as keyof Collections
);

// const collection = computed(
//   () =>
//     (selectedVersion.value.collection
// );

const navic = computed(() =>
  useAsyncData(collection.value + "_nav", () => {
    return queryCollectionNavigation(collection.value);
  })
);

const zzz = selectNaviNode(navic.value.data.value, selectedVersion.value.path);

const treeItems = computed<TreeItem[]>(
  () =>
    selectNaviNode(
      navic.value.data.value,
      selectedVersion.value.path
    )?.children?.map((aa, idx) => convertNaviToTreeItem(aa, idx, router)) || []
);

// const treeItems = computed<TreeItem[]>(() => []);

const selectedTreeNode = ref();
</script>

<template>
  <div>route : {{ route.path }}::</div>
  <div>slug:{{ slug }} ::</div>
  <div>col: {{ collection }}::</div>
  <div>selection : {{ selections }}::: {{ selectedVersion }}:: ####</div>
  <div>{{ selectedVersion }}:: ####</div>
  <!-- {{ navic }} -->
  %%%%
  <ul v-for="item in navic.data.value">
    <!-- <li>{{ item }}</li> -->
  </ul>
  <!-- <ul v-for="item in navic.data.value">
    <li>{{ item }}</li>
  </ul> -->
  <div class="flex flex-col pb-2 px-4 border-b-1 border-gof-200">
    <!-- <div>
    </div> -->
    <div class="pl-2">Available versions</div>
    <USelect
      placeholder="Select version"
      v-model="selectedVersion.path"
      value-key="path"
      :items="selections"
      class="w-full"
      highlight
      size="xs"
      icon="i-lucide-book"
      @change="router.push(selectedVersion.path)"
    >
    </USelect>
  </div>
  <div class="h-full overflow-y-auto">
    <UTree
      v-model="selectedTreeNode"
      :items="treeItems"
      size="md"
      class="pt-2"
    />

    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
  </div>
</template>

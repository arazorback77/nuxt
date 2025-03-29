<template>
  <div>
    <UModal v-model:open="open" class="w-full">
      <UButton
        variant="solid"
        color="primary"
        class="h-8 w-full self-center rounded-sm font-normal bg-(--gofhead-accent) text-(--gofhead)"
        icon="i-lucide-search"
      >
        <span class="mr-auto overflow-hidden"> search... </span>
        <UKbd
          value="ctrl"
          variant="solid"
          class="bg-(--gofhead-inv) text-(--gofhead)"
        />
        +
        <UKbd
          value="K"
          variant="solid"
          class="bg-(--gofhead-inv) text-(--gofhead)"
        />
      </UButton>
      <template #header>
        <UInput v-model="query" placeholder="Search..." class="w-full" />
      </template>
      <template #body>
        <ul>
          <li v-for="link of result" :key="link.id" class="mt-2">
            <NuxtLink :to="link.id">
              <h2 class="text-white">
                {{ link.title }}
              </h2>
              <p class="text-white line-clamp-3">
                <span v-html="link.hints"></span>
              </p>
            </NuxtLink>
          </li>
        </ul>
        <UCard class="bg-gray-900 w-full"> </UCard>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import MiniSearch from "minisearch";
import type { SearchResult } from "minisearch";

const visible = ref(false);
const label = ref([]);

const open = ref(false);

defineShortcuts({
  meta_k: () => {
    open.value = !open.value;
  },
  ctrl_k: () => {
    open.value = !open.value;
  },
});

const query = ref("");
const { data } = await useAsyncData("search", () =>
  queryCollectionSearchSections("content")
);

const miniSearch = new MiniSearch({
  fields: ["content"],
  storeFields: ["title", "level", "content"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    // fuzzy: false,
    combineWith: "AND",
  },
});

function markHints(result: SearchResult) {
  let hints: string = "";

  result.terms.forEach((term: string) => {
    const regexp = new RegExp(`(${term})`, "gi");

    result.match[term].forEach((field) => {
      const value = result[field];

      if (typeof value === "string") {
        hints =
          hints == ""
            ? // ? value.replace(regexp, "<mark>$1</mark>")
              // : hints.replace(regexp, "<mark>$1</mark>");
              value.replace(regexp, "<span class='highlighter'>$1</span>")
            : hints.replace(regexp, "<span class='highlighter'>$1</span>");
      }
    });
  });

  return hints;
}

// Add data to the MiniSearch instance
miniSearch.addAll(toValue(data.value));
// const result = computed(() => miniSearch.search(toValue(query)));
const result = computed(() =>
  miniSearch.search(toValue(query)).map((rst) => {
    rst.hints = markHints(rst);
    return rst;
  })
);
</script>

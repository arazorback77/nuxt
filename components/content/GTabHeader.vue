<script setup lang="ts">
import { TabsIndicator, TabsList, TabsTrigger } from "reka-ui";
const { titles = "Tab1, Tab2" } = defineProps<{
  titles?: string;
}>();

const prefix = "item";
const headitems = titles.split(",");
</script>

<template>
  <TabsList class="relative shrink-0 flex" aria-label="Manage your account">
    <template v-for="(title, index) in headitems">
      <TabsTrigger
        class="flex-1 flex items-center justify-center text-sm px-5 h-8 leading-none text-(--ui-text) select-none rounded-tl-md bg-(--ui-bg-elevated) border-b-2 border-(--ui-border-muted) data-[state=active]:border-b-3 data-[state=active]:border-(--ui-primary) hover:bg-(--ui-bg-accented) hover:cursor-pointer"
        :value="prefix + (index + 1)"
      >
        {{ title }}
      </TabsTrigger>
    </template>
  </TabsList>
</template>

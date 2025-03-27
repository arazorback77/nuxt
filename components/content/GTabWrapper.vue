<script setup lang="ts">
import { TabsRoot } from "reka-ui";

const { defaultIndex = 1 } = defineProps<{
  defaultIndex?: number;
}>();

const defaultValue = "item" + defaultIndex;
</script>

<template>
  <TabsRoot
    class="flex flex-col w-full rounded-sm mt-4 ring-1 ring-(--ui-border-accented)"
    :default-value="defaultValue"
  >
    <slot name="header"></slot>
    <slot name="content"></slot>
  </TabsRoot>
</template>

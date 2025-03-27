<script setup lang="ts">
import { TabsContent } from "reka-ui";
const { index } = defineProps<{
  // value: string | number;
  index: number;
}>();
const value = "item" + index;
</script>

<template>
  <TabsContent
    class="grow p-5 bg-(--ui-bg-muted) rounded-b-md ring-1 ring-(--ui-border-accented)"
    :value="value"
  >
    <slot></slot>
  </TabsContent>
</template>

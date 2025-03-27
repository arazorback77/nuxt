<template>
  <AccordionItem class="border-b-1 border-(--ui-bg-accented) pt-6" :value="key">
    <AccordionHeader class="flex">
      <AccordionTrigger
        class="flex flex-1 text-md text-(--ui-text-highlighted) px-5 pb-2 items-center justify-between cursor-pointer"
      >
        <slot name="header"></slot>
        <UIcon name="i-lucide-chevron-down" class="size-4" />
      </AccordionTrigger>
    </AccordionHeader>

    <AccordionContent class="text-(--ui-text) text-sm px-5 pb-4">
      <slot name="body"></slot>
    </AccordionContent>
  </AccordionItem>
</template>

<script setup lang="ts">
import { useId } from "vue";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "reka-ui";

const id = useId();

const { value = "value" } = defineProps<{
  value?: string;
}>();

const key = value == null ? id : value;

defineSlots();
</script>

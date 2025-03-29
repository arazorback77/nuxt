<template>
  <UCollapsible class="group flex flex-col gap-0 pt-2 w-full">
    <UButton
      :label="title"
      :color="type"
      :variant="variant"
      trailing-icon="i-lucide-chevron-down"
      :ui="{
        base: 'group-data-[state=open]:rounded-b-none',
        trailingIcon:
          'group-data-[state=open]:rotate-180 transition-transform duration-200',
      }"
      block
    />

    <template #content>
      <div
        class="min-h-24 w-full border-1 border-(--ui-bg-elevated) pr-2 pl-4 py-2"
        :class="ileft"
      >
        <slot></slot>
      </div>
    </template>
  </UCollapsible>
</template>
<script setup lang="ts">
const {
  type = "gof",
  variant = "outline",
  outerIndent = 4,
  innerIndent = 4,
  textSize = "sm",
} = defineProps<{
  title: string;
  type?: "gof" | "neutral" | "primary" | "secondary";
  variant?: "solid" | "outline" | "soft" | "subtle";
  outerIndent?: number;
  innerIndent?: number;
  textSize?: string;
}>();

const oleft = "pl-" + outerIndent;
const ileft = "pl-" + innerIndent;
const itext = "text-" + textSize;
// const iclass = ileft;
const iclass = [itext, ileft];
const openborder = "data-[state=open]:rounded-b-0";
</script>

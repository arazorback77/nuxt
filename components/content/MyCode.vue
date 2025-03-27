<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { BuiltinLanguage } from "shiki";

const {
  code = "",
  inGroup = false,
  inStack = false,
  language,
  filename,
  meta,
} = defineProps<{
  code?: string;
  language?: BuiltinLanguage;
  filename?: string;
  inGroup?: boolean;
  inStack?: boolean;
  highlights?: number[];
  meta?: string;
}>();
</script>

<template>
  <MyCode
    :code="code"
    :language="language"
    :filename="filename"
    :highlights="highlights"
    :meta="meta"
  >
    <!-- <pre :class="$props.class bg-(--ui-bg-accented)"><slot /></pre> -->
    <pre class="bg-(--ui-bg-muted)"><slot /></pre>
  </MyCode>
</template>

<script setup lang="ts">
import type { BuiltinLanguage } from "shiki";

defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String as PropType<BuiltinLanguage>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
  style: {
    type: [String, Object],
    default: null,
  },
});
</script>

<script setup lang="ts">
import GIconSvg from "./GIconSvg.vue";
</script>

<template>
  <li class="[&>ol]:!mt-2 [&>ul]:!mt-2 align-bottom">
    <!-- <GIconSvg
      name="i-tabler-circle-number-9-filled"
      :size="24"
      class="mr-2 align-bottom"
    /> -->
    <slot />
  </li>
</template>

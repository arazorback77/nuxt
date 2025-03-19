<template>
  <div>
    <Button
      v-if="panelRef?.isCollapsed"
      icon="pi pi-chevron-right"
      severity="contrast"
      rounded
      raised
      size="small"
      @click="panelRef?.expand()"
    />

    <Button
      v-else
      icon="pi pi-chevron-left"
      severity="contrast"
      rounded
      raised
      size="small"
      @click="panelRef?.collapse()"
    >
    </Button>
    <!-- <Button
      v-if="$goff?.isCollapsed"
      icon="pi pi-chevron-right"
      severity="contrast"
      rounded
      raised
      size="small"
      @click="$goff?.expand()"
    /> -->

    <!-- <Button @click="$emit('toggleSide')" label="aaa"> </Button> -->
  </div>
</template>

<script setup lang="ts">
import type { SplitterPanel } from "reka-ui";

const panelRef = inject<Ref<InstanceType<typeof SplitterPanel>>>("panelRef");
// const { $gof, $goff, $hello } = useNuxtApp();

const emits = defineEmits(["toggleSide"]);
</script>

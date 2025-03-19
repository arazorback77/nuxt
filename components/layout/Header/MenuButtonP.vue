<template>
  <div>
    <Button
      icon="pi pi-chevron-right"
      severity="secondary"
      rounded
      raised
      size="small"
      @click="panelRefP?.resetState()"
    />

    <!-- class="my-auto" -->
    <!-- <Button
      v-else
      icon="pi pi-chevron-left"
      severity="secondary"
      rounded
      raised
      size="small"
      @click="panelRef?.collapse()"
    >
    </Button> -->
  </div>
</template>
<script setup lang="ts">
// import "primeicons/primeicons.css";
// const panelRef = inject("gof");
// import Header from "./comp/Header.vue";
import type { SplitterPanel } from "primevue";
const panelRefP = inject<Ref<InstanceType<typeof SplitterPanel>>>("sol");
</script>

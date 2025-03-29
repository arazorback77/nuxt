<script setup lang="ts">
// import { UApp } from "#components";
// const emits = defineEmits(["toggleSides"]);

// function rec() {
//   alert("bbb :" + toValue(panelRef)?.isCollapsed);
//   emits("toggleSides");
// }

// import type { SplitterPanel } from "reka-ui";
// const panelRef = inject<Ref<InstanceType<typeof SplitterPanel>>>("panelRef");
// function toggleSide(event: Event) {
//   alert("aaaaa :" + toValue(panelRef)?.isCollapsed);
//   toValue(panelRef)?.isCollapsed
//     ? toValue(panelRef)?.expand()
//     : toValue(panelRef)?.collapse();
// }
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :throttle="0" :height="5" class="bg-orange-500" />
    <UNotifications />
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </UApp>
</template>

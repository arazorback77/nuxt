<script setup lang="ts">
// const route = useRoute();

// watch(
//   () => route.path,
//   () => {
//     console.log("aaaaa : " + useNuxtApp().payload.serverRendered);
//   }
// );
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :throttle="0" :height="5" class="bg-orange-500" />
    <NuxtLayout>
      <!-- <NuxtPage page-key="slug"></NuxtPage> -->
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </UApp>
</template>

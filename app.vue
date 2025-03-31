<script setup lang="ts"></script>

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

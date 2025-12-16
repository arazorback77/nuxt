<script setup lang="ts">
const route = useRoute();
// debugger;
const slugs = route.path;
const slugref = ref(route);

onMounted(() => console.log("layout mounted"));
onUpdated(() => console.log("layout updated"));
onUnmounted(() => console.log("layout unmouted"));
</script>

<template>
  <div>
    {{ slugs }} :: {{ slugref.path }}:: {{ route.path }}

    <slot> </slot>
  </div>
</template>

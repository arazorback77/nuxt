<template>
  <nav
    class="grid grid-cols-[minmax(120px,0.18fr)_48px_1fr_minmax(200px,0.5fr)] bg-gheader-background sticky top-0 z-50 h-13 items-center"
  >
    <LayoutHeaderLogo class="pl-10"></LayoutHeaderLogo>
    <LayoutHeaderMenuButton @toggle-side="rec" />
    <!-- <LayoutHeaderMega></LayoutHeaderMega> -->
    <LayoutHeaderMenuBar></LayoutHeaderMenuBar>
    <!-- <LayoutHeaderMenuButtonP /> -->

    <div class="flex flex-row gap-1">
      <LayoutHeaderSearchButton></LayoutHeaderSearchButton>
      <Button icon="pi pi-user" severity="primary" aria-label="User" />
    </div>
  </nav>
</template>

<script setup lang="ts">
// import Logo from "./Header/Logo.vue";
// import MenuBar from "./Header/MenuBar.vue";
// import MenuButton from "./Header/MenuButton.vue";
// import MenuButtonP from "./Header/MenuButtonP.vue";
const props = defineProps(["btnSide"]);
const emits = defineEmits(["toggleSide"]);

function rec() {
  emits("toggleSide");
}
</script>

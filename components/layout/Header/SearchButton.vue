<template>
  <!-- v-if="style === 'input'" :class="[inAside ? 'mb-4' : 'md:w-40 lg:w-64']" -->
  <Button
    outline
    class="h-8 w-1/2 self-center rounded-md font-normal text-muted-foreground hover:text-accent-foreground"
    @click="visible = true"
    icon="pi pi-user"
    label="search.."
  >
    <span class="mr-auto overflow-hidden">
      <!-- {{ placeholder }} -->
      <!-- search... -->
    </span>
    <Kbd class="ml-auto hidden md:block">
      <span class="text-xs">⌘</span> K
    </Kbd>
  </Button>

  <LayoutHeaderSearchDialogP v-model:visible="visible" />

  <SignedOut>
    <SignInButton />
  </SignedOut>
  <SignedIn>
    <UserButton />
  </SignedIn>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const visible = ref(false);
// const { enable, inAside, style, placeholder } = useConfig().value.search;
</script>

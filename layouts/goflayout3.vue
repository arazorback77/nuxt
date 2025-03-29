<template>
  <nav
    class="bg-(--gofhead) grid grid-cols-[minmax(240px,0.18fr)_48px_1fr_minmax(200px,0.5fr)_120px] sticky top-0 h-12 z-100 items-center"
  >
    <LayoutTopLogo></LayoutTopLogo>
    <div>
      <UButton
        v-if="panelRef?.isExpanded"
        icon="i-lucide-chevron-right"
        size="md"
        color="primary"
        variant="solid"
        class="rounded-full"
        @click="$emit('toggleSide')"
      />

      <UButton
        v-else
        icon="i-lucide-chevron-left"
        size="md"
        color="primary"
        variant="solid"
        class="rounded-full"
        @click="$emit('toggleSide')"
      >
      </UButton>
    </div>
    <LayoutTopCenter2></LayoutTopCenter2>
    <LayoutTopRight></LayoutTopRight>

    <div class="flex flex-row items-center justify-evenly">
      <ColorModeButton></ColorModeButton>
      <SignedOut>
        <SignInButton>
          <UButton
            icon="i-lucide-user"
            variant="solid"
            size="md"
            class="rounded-full font-bold bg-(--gofhead-accent)"
            :ui="{
              // leadingIcon: 'text-(--gofhead)',
              leadingIcon: 'text-(--ui-text)',
            }"
          ></UButton>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton> </UserButton>
      </SignedIn>
    </div>
  </nav>
  <slot></slot>
</template>

<script setup lang="ts">
// import { LayoutTopRight } from "#components";
import type { SplitterPanel } from "reka-ui";

// const panelRef = inject<Ref<InstanceType<typeof SplitterPanel>>>("panelRef");

const emits = defineEmits(["toggleSide"]);

// function toggleSide(event: Event) {
//   toValue(panelRef)?.isCollapsed
//     ? toValue(panelRef)?.expand()
//     : toValue(panelRef)?.collapse();
// }

const sideToggle = useState("sideToggle", () => true);
</script>

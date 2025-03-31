<template>
  <nav
    class="bg-(--gofhead) grid grid-cols-[minmax(240px,0.18fr)_48px_1fr_minmax(200px,0.5fr)_120px] sticky top-0 h-12 z-100 items-center"
  >
    <LayoutTopLogo></LayoutTopLogo>
    <div>
      <UButton
        v-if="panelState?.isCollapsed"
        icon="i-lucide-chevron-right"
        size="md"
        color="primary"
        variant="solid"
        class="rounded-full"
        @click="panelState?.expand()"
      />

      <UButton
        v-else
        icon="i-lucide-chevron-left"
        size="md"
        color="primary"
        variant="solid"
        class="rounded-full"
        @click="toggleSide"
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
  <div>Goflayout3</div>
  <slot> </slot>
</template>

<script setup lang="ts">
import { LayoutTopRight } from "#components";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";

const panelState: Ref<InstanceType<typeof SplitterPanel>> =
  useState("panelState");

// const btnSide = useState("left");
const btnSide = computed<string>(() => {
  return toValue(panelState)?.isCollapsed ? "Expand" : "Collapse";
});

function toggleSide(event: Event) {
  alert(panelState.value);
  return toValue(panelState)?.isCollapsed
    ? toValue(panelState)?.expand()
    : toValue(panelState)?.collapse();
}
</script>

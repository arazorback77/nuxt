<template>
  <nav
    class="grid grid-cols-[minmax(200px,0.18fr)_48px_1fr_minmax(200px,0.5fr)_48px] sticky top-0 z-50 h-12 items-center"
  >
    <LayoutTopLogo></LayoutTopLogo>
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
    </div>
    <LayoutTopCenter2></LayoutTopCenter2>
    <LayoutTopRight></LayoutTopRight>

    <div class="clerk">
      <SignedOut>
        <SignInButton>
          <Button icon="pi pi-user" severity="info"></Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </nav>

  <slot> </slot>
</template>

<script setup lang="ts">
import { LayoutTopRight } from "#components";
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui";
// const panelRef = ref<InstanceType<typeof SplitterPanel>>();
const panelRef = useTemplateRef<InstanceType<typeof SplitterPanel>>("panelRef");

provide("panelRef", panelRef);

// const btnSide = useState("left");
const btnSide = computed<string>(() => {
  return toValue(panelRef)?.isCollapsed ? "Expand" : "Collapse";
});

function toggleSide(event: Event) {
  toValue(panelRef)?.isCollapsed
    ? toValue(panelRef)?.expand()
    : toValue(panelRef)?.collapse();
}
</script>

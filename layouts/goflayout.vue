<template>
  <div>
    <LayoutHeader @toggle-side="toggleSide" btnSide="btnSide" />
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
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

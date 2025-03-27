<script setup lang="ts">
import { ref } from "vue";
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
} from "reka-ui";

const hoverState = ref(false);
</script>

<template>
  <HoverCardRoot v-model:open="hoverState">
    <HoverCardTrigger rel="noreferrer noopener">
      <UButton
        color="gof"
        variant="soft"
        icon="i-lucide-bookmark"
        size="xs"
        class="rounded-full"
      />
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        class="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-(--ui-bg-elevated) p-5 data-[state=open]:transition-all ring-1 ring-(--ui-border-accented) shadow-sm z-10"
        :side-offset="5"
      >
        <slot></slot>

        <HoverCardArrow
          class="fill-(--ui-bg-muted) stroke-(--ui-border-accented) -mt-[1px]"
          :width="12"
          :height="6"
        />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>

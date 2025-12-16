<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const { prevNext } = defineProps<{
  prevNext: ContentNavigationItem[] | null;
}>();
</script>
<template>
  <!-- <div class="flex gap-4 mt-2">
    <UButton
      v-if="prevNext?.[0]"
      variant="outline"
      color="neutral"
      leading-icon="i-tabler-chevron-left"
      class="flex-1 py-4"
      :ui="{
        leadingIcon: 'w-8 h-8 text-(--ui-text-dimmed)',
      }"
    >
      <NuxtLink v-if="prevNext?.[0]" :to="prevNext[0].path">
        {{ prevNext[0].title }}
      </NuxtLink>
    </UButton>
    <div v-else class="flex-1 py-4"></div>
    <UButton
      v-if="prevNext?.[1]"
      variant="outline"
      color="neutral"
      trailing-icon="i-tabler-chevron-right"
      class="flex-1 py-4"
      :ui="{
        trailingIcon: 'w-8 h-8 text-(--ui-text-dimmed)',
      }"
    >
      <NuxtLink v-if="prevNext?.[1]" :to="prevNext[1].path" class="ml-auto">
        {{ prevNext[1].title }}
      </NuxtLink>
    </UButton>
    <div v-else class="flex-1 py-4"></div>
  </div> -->

  <!-- <div class="flex justify-between gap-4 mt-2">
    <div class="flex-1 py-4 rounded-md ring-1 ring-(--ui-border-muted) group">
      <GIconSvg v-if="prevNext?.[0]" name="i-tabler-chevron-left"></GIconSvg>
      <NuxtLink v-if="prevNext?.[0]" :to="prevNext[0].path">
        {{ prevNext[0].title }}
      </NuxtLink>
    </div>
    <div class="flex-1 py-4 rounded-sm ring-1 ring-(--ui-border-muted) group">
      <NuxtLink
        v-if="prevNext?.[1]"
        :to="prevNext[1].path"
        class="ml-auto rounded-sm ring-1 ring-(--ui-border-muted)"
      >
        {{ prevNext[1].title }}
      </NuxtLink>
      <GIconSvg v-if="prevNext?.[1]" name="i-tabler-chevron-right"></GIconSvg>
    </div>
  </div> -->

  <div class="flex gap-4 mt-2 items-stretch">
    <div class="flex flex-1">
      <NuxtLink
        v-if="prevNext?.[0]"
        :to="prevNext[0].path"
        class="flex flex-1 rounded-sm ring-1 ring-(--ui-border-muted) py-4 items-center hover:bg-(--ui-bg-elevated)"
      >
        <div class="flex items-center px-2 text-md">
          <GIconSvg
            v-if="prevNext?.[0]"
            name="i-tabler-chevron-left"
            color="var(--ui-text-dimmed)"
          ></GIconSvg>
          {{ prevNext[0].title }}
        </div>
      </NuxtLink>
    </div>
    <div class="flex flex-1">
      <NuxtLink
        v-if="prevNext?.[1]"
        :to="prevNext[1].path"
        class="flex flex-1 rounded-sm ring-1 ring-(--ui-border-muted) py-4 justify-end items-center hover:bg-(--ui-bg-elevated)"
      >
        <div class="flex justify-end items-center px-2 text-md">
          {{ prevNext[1].title }}
          <GIconSvg
            v-if="prevNext?.[1]"
            name="i-tabler-chevron-right"
            color="var(--ui-text-dimmed)"
          ></GIconSvg>
        </div>
      </NuxtLink>
    </div>
  </div>

  ---------------------flex

  <div class="flex gap-4 mt-2 items-stretch">
    <div class="flex flex-1">
      <NuxtLink
        v-if="prevNext?.[0]"
        :to="prevNext[0].path"
        class="flex flex-1 rounded-sm ring-1 ring-(--ui-border-muted) py-4 hover:bg-(--ui-bg-elevated)"
      >
        <div class="flex items-center px-2 text-md">
          <GIconSvg
            v-if="prevNext?.[0]"
            name="i-tabler-chevron-left"
            color="var(--ui-text-dimmed)"
          ></GIconSvg>
          {{ prevNext[0].title }}
        </div>
      </NuxtLink>
    </div>
    <div class="flex flex-1">
      <NuxtLink
        v-if="prevNext?.[1]"
        :to="prevNext[1].path"
        class="flex-1 justify-end rounded-sm ring-1 ring-(--ui-border-muted) py-4 hover:bg-(--ui-bg-elevated)"
      >
        <div class="flex items-center px-2 text-md justify-end">
          {{ prevNext[1].title }}

          <GIconSvg
            v-if="prevNext?.[1]"
            name="i-tabler-chevron-right"
            color="var(--ui-text-dimmed)"
          ></GIconSvg>
        </div>
      </NuxtLink>
    </div>
  </div>

  ---------------------grid

  <div class="grid grid-cols-2 gap-4 mt-2 justify-stretch items-stretch">
    <div class="grid">
      <NuxtLink v-if="prevNext?.[0]" :to="prevNext[0].path" class="grid">
        <div
          class="grid grid-flow-col px-2 text-md justify-start items-center rounded-sm ring-1 ring-(--ui-border-muted) py-4 hover:bg-(--ui-bg-elevated)"
        >
          <GIconSvg
            v-if="prevNext?.[0]"
            name="i-tabler-chevron-left"
            color="var(--ui-text-dimmed)"
          ></GIconSvg>
          {{ prevNext[0].title }}
        </div>
      </NuxtLink>
    </div>
    <div class="grid">
      <NuxtLink v-if="prevNext?.[1]" :to="prevNext[1].path" class="grid">
        <div
          class="grid grid-flow-col items-center px-2 text-md justify-end rounded-sm ring-1 ring-(--ui-border-muted) py-4 hover:bg-(--ui-bg-elevated)"
        >
          {{ prevNext[1].title }}
          <GIconSvg
            v-if="prevNext?.[1]"
            name="i-tabler-chevron-right"
            color="var(--ui-text-dimmed)"
          ></GIconSvg>
        </div>
      </NuxtLink>
    </div>
  </div>

  ---------------------grid2

  <div class="grid grid-cols-2 gap-4 mt-2">
    <div class="grid">
      <div
        class="grid grid-flow-col justify-start px-2 text-md items-center rounded-sm ring-1 ring-(--ui-border-muted) py-4 hover:bg-(--ui-bg-elevated)"
      >
        <GIconSvg
          name="i-tabler-chevron-left"
          color="var(--ui-text-dimmed)"
        ></GIconSvg>
        aaaaa
      </div>
    </div>

    <div class="grid">
      <div
        class="grid grid-flow-col items-center px-2 text-md justify-end rounded-sm ring-1 ring-(--ui-border-muted) py-4 hover:bg-(--ui-bg-elevated)"
      >
        bbbbbbb bbbbbasdfa sdbbbbbb
        <GIconSvg
          name="i-tabler-chevron-right"
          color="var(--ui-text-dimmed)"
        ></GIconSvg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import items from "@/public/data/menu.json";
const router = useRouter();

const items1 = [
  {
    label: "Archives",
    icon: "i-lucide-book-open",
    children: [
      {
        label: "KICS",
        description: "보험시행세칙 별표[22]",
        icon: "i-lucide-house",
        to: "/kics",
        // onSelect: (e: Event) => {
        //   router.push("/kics");
        // },
      },
      {
        label: "Basel",
        description: "Basel Accord",
        icon: "i-lucide-cloud-download",
      },
      {
        label: "Component",
        icon: "i-lucide-smile",
        description: "GBook Component",
        // to: "/comp",
        onSelect: (e: Event) => {
          router.push("/comp/acco");
        },
      },
      {
        label: "Colors",
        icon: "i-lucide-swatch-book",
        description:
          "Choose a primary and a neutral color from your Tailwind CSS theme.",
      },
      {
        label: "Theme",
        icon: "i-lucide-cog",
        description:
          "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
      },
    ],
  },
  {
    label: "Composables",
    icon: "i-lucide-database",
    children: [
      {
        label: "defineShortcuts",
        icon: "i-lucide-file-text",
        description: "Define shortcuts for your application.",
      },
      {
        label: "useOverlay",
        icon: "i-lucide-file-text",
        description: "Display a modal/slideover within your application.",
      },
      {
        label: "useToast",
        icon: "i-lucide-file-text",
        description: "Display a toast within your application.",
      },
    ],
  },
  {
    label: "Components",
    icon: "i-lucide-box",
    slot: "components",
    children: [
      {
        label: "Link",
        icon: "i-lucide-file-text",
        description: "Use NuxtLink with superpowers.",
      },
      {
        label: "Modal",
        icon: "i-lucide-file-text",
        description: "Display a modal within your application.",
      },
      {
        label: "NavigationMenu",
        icon: "i-lucide-file-text",
        description: "Display a list of links.",
      },
      {
        label: "Pagination",
        icon: "i-lucide-file-text",
        description: "Display a list of pages.",
      },
      {
        label: "Popover",
        icon: "i-lucide-file-text",
        description:
          "Display a non-modal dialog that floats around a trigger element.",
      },
      {
        label: "Progress",
        icon: "i-lucide-file-text",
        description: "Show a horizontal bar to indicate task progression.",
      },
    ],
  },
];

const active = ref();

defineShortcuts({
  1: () => {
    active.value = "0";
  },
  2: () => {
    active.value = "1";
  },
  3: () => {
    active.value = "2";
  },
});
</script>

<template>
  <UNavigationMenu
    v-model="active"
    :items="items"
    arrow
    class="w-full justify-end pr-2 z-20"
  >
    <template #components-trailing>
      <UBadge label="3" variant="solid" size="xs" class="rounded-full" />
    </template>
  </UNavigationMenu>
</template>

<!-- arrow -->
<!-- highlight
    color="primary"
    highlight-color="primary" -->

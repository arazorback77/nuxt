<template>
  <!-- <UIcon :name="name" clase="bg-(--ui-primary)" :class="size" /> -->
  <UIcon
    :name="name"
    :size="size"
    :customize="customize"
    mode="svg"
    class="inline"
  />
</template>

<script setup lang="ts">
const {
  size = 32,
  color = "currentColor",
  // isFill = true,
} = defineProps<{
  name: string;
  size?: number;
  color?: string;
  // isFill?: boolean;
}>();

const varColor = color.startsWith("var")
  ? color
  : "var(--color)" + color + "500";
// Define the customize function to modify SVG content

const customize = (
  content: string,
  name?: string,
  prefix?: string,
  provider?: string
) => {
  if (prefix !== "tabler") return content; // Ignore Prefix

  if (color && name?.endsWith("filled")) {
    return content.replace(/fill="[^"]*"/g, `fill="${color}"`);
  } else {
    return color
      ? content.replace(/stroke="[^"]*"/g, `stroke="${color}"`) // Change stroke color to red
      : content;
  }
};
// return color
//   ? content
//       .replace(/stroke-width="[^"]*"/g, `stroke-width="2"`) // Change stroke width to 2
//       .replace(/stroke="[^"]*"/g, `stroke="currentColor"`) // Change stroke color to red
//       .replace(/fill="[^"]*"/g, `fill="${color}"`) // Change fill color to red
// : // .replace(/animation-duration="[^"]*"/g, `animation-duration="1s"`) // Change animation duration to 1s (for animated icons)
// .replace(/opacity="[^"]*"/g, `opacity="0.8"`); // Change opacity to 0.8
// content;
</script>

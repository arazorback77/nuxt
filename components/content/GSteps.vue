<template>
  <div
    class="[counter-reset:steps] [&>h3]:[counter-increment:steps] [&>h3]:before:content-[counter(steps)] [&>h3]:before:absolute [&>h3]:before:w-9 [&>h3]:before:h-9 [&>h3]:before:bg-(--ui-bg-muted) [&>h3]:before:rounded-full [&>h3]:before:text-base [&>h3]:before:font-bold [&>h3]:before:text-center [&>h3]:before:inline-flex [&>h3]:before:items-center [&>h3]:before:justify-center [&>h3]:before:-ml-[50px] [&>h3]:before:-mt-0 [&>h3]:before:-indent-px [&>h3]:before:border-1 ml-4 mt-2 border-l pl-8 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-12"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { level = "3" } = defineProps<{
  level?: "1" | "2" | "3" | "4" | "5" | "6";
}>();

const levelClass = {
  1: "[&>h1]:steps",
  2: "[&>h2]:steps",
  3: "[&>h3]:steps",
  4: "[&>h4]:steps",
  5: "[&>h5]:steps",
  6: "[&>h6]:steps",
};
</script>
<!-- <style lang="css" scoped>
.step {
  counter-increment: step;
}

.step:before {
  absolute w-9 h-9 bg-muted rounded-full font-mono font-medium text-center text-base inline-flex items-center justify-center -indent-px border-4 border-background;
  -ml-[50px] -mt-1;
  content: counter(step);
}
</style> -->

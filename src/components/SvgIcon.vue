<template>
  <!-- 參照：https://www.cnblogs.com/liuminxiu0707/p/18143399 -->
  <svg
    :class="className"
    :style="{ width, height: _height }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
  name: { type: String, required: true },
  width: { type: String, default: "16px" },
  height: { type: String, default: "" },
  className: { type: String, default: "" },
})
const _height = computed(() => {
  return props.height ? props.height : props.width
})
const iconName = computed(() => {
  return `#${props.name}`
})
</script>

<style lang="scss" scoped></style>

<template>
  <i class="sketch-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </i>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      console.log("ads", this.name);
      return `#${this.name}`;
    },
  },
};
</script>

<!-- 參考： https://cloud.tencent.com/developer/article/1965373 -->

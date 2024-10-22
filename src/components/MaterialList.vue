<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="toggleTheme">按一下</button>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue"

export default defineComponent({
  name: "MyComponent",

  setup () {
    const title = ref("順序問題")


    const reversedTitle = computed(() =>
      title.value.split("").reverse().join("")
    )

    function toggleTheme () {
      console.log("按鈕")
      title.value = "哈哈哈哈"
    }

    return {
      title,
      toggleTheme,
      reversedTitle,
    }
  },
  watch: {
    title (newValue) {
      console.log("watch", newValue) 
    },
  },
  mounted () {
    console.log("mounted")  
  },


})
</script>

<style scoped>
h1 {
  color: black;
}
</style>

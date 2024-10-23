<template>
  <div>
    <p class="title">{{ title }}</p>
    <p class="title">{{ reversedTitle }}</p>
    <button @click="toggleText">按一下</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
// 目前找到的方法無法針對setup內進行判斷順序問題，無論是export default 裡的 setup()
// 或是 <script setup lang="ts"> 都無法，但有找到eslint官方文件說明有針對vue/order-in-components
// 這會強制針對組件中屬性的順序
// 網址： https://eslint.vuejs.org/rules/order-in-components
// 但如果我們使用vue3 通常已經可以把computed、watch、onMounted寫在setup()裡
// 於是我在找文件時，看到有一位外國人分享，他和團隊如何保持程式碼的一致性
// 網址：https://eslint.vuejs.org/rules/order-in-components
///// imports /////
///// props/emits /////
///// refs and variables /////
///// computed /////
///// functions /////
///// watchers /////
///// lifecycle /////
// onMounted(() => {});
// 他們使用的方式是規劃團隊寫程式碼前，需要使用註解來表示順序
export default {
  name: "MyComponent",
  setup () {
    const title = ref("順序問題")


    function toggleText () {
      console.log("按鈕")
      title.value = "Eslint"
    }

    return {
      title,
      toggleText
    }
  },
  computed : {
    reversedTitle () {
      return this.title.split('').reverse().join('')
    }
  },
  watch: {
    title (newValue: string) {
      console.log("watch", newValue)
    },
  },
  mounted () {
    console.log("mounted")
  },



}
</script>

<style scoped>
.title {
  color: black;
  font-size: 60px;
  font-weight: bold;
}
</style>

<template>
  <v-app :class="{ dark: isDarkMode }" class="background">
    <v-layout style="height: 100dvh; overflow: hidden" class="background">
      <v-app-bar
        scroll-behavior="elevate"
        height="85"
        :style="{ backgroundColor: 'var(--background)' }"
      >
        <v-img
          max-width="130"
          max-height="40"
          class="mt-[20px] mb-[25px] ml-[30px] p-0"
          cover
          src="@/assets/images/logo.png"
        ></v-img>
        <button @click="toggleTheme">切換</button>
      </v-app-bar>
      <!-- 參照網址去設定斷點以及寬度 https://vuetifyjs.com/zh-Hans/api/v-navigation-drawer/#props-close-delay -->
      <v-navigation-drawer
        :mobile-breakpoint="992"
        :width="250"
        class="asideMenu rounded-te-50 border-none"
      >
        <v-btn class="rounded-50" prepend-icon="$vuetify" variant="outlined">
          創建作品
        </v-btn>
        <svg-icon name="plus" />
        <v-list class="mt-5">
          <v-list-item title="側邊攔"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="" style="overflow-y: auto">
        <div class="overflow">
          <p>Main Content</p>
          <p class="d-none" v-for="i in 50" :key="i">Item {{ i }}</p>
        </div>
      </v-main>
    </v-layout>
  </v-app>
  <svg-icon name="plus"></svg-icon>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isDarkMode = ref(false);

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
  // console.log(isDarkMode.value)
}
</script>
<style scoped>
@import "@/styles/settings.scss";
.background {
  background-color: var(--background);
}
.asideMenu {
  background-color: var(--asideMenu);
}
</style>

<template>
  <v-app :class="{ dark: isDarkMode }" class="background texts-primary">
    <v-layout style="height: 100dvh; overflow: hidden" class="background">
      <v-app-bar
        scroll-behavior="elevate"
        height="85"
        :style="{ backgroundColor: 'var(--background)' }"
      >
        <svg-icon name="logo" class="texts-primary" width="130" />

        <button @click="toggleTheme" class="texts-primary">切換</button>
      </v-app-bar>
      <!-- 參照網址去設定斷點以及寬度 https://vuetifyjs.com/zh-Hans/api/v-navigation-drawer/#props-close-delay -->
      <v-navigation-drawer
        :mobile-breakpoint="992"
        :width="250"
        class="asideMenu rounded-te-50 border-none"
      >
        <v-btn
          class="rounded-50 texts-primary mt-10 d-flex mx-auto"
          :width="140"
          :height="40"
          variant="outlined"
        >
          <svg-icon name="plus" class="mr-3" />
          創建作品
        </v-btn>
        <v-list class="mt-10 pa-0">
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            class="pa-0"
          >
            <v-btn
              :to="item.path"
              :class="{
                'borders-primary': isActive(item.path),
                'px-6': isActive(item.path),
                'px-7': !isActive(item.path),
              }"
              class="texts-primary w-100 d-flex rounded-0 justify-start"
              :height="50"
              variant="text"
            >
              <svg-icon :name="item.icon" width="22" class="mr-3" />
              {{ item.name }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="" style="overflow-y: auto">
        <div class="overflow">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-app>
  <svg-icon name="plus"></svg-icon>
</template>

<script setup lang="ts">
import menuItems from "@/components/MenuItems.json";
import { ref } from "vue";
import { useRoute } from "vue-router";
const isDarkMode = ref(false);
const route = useRoute();
function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
  // console.log(isDarkMode.value)
}
// 是否為點選的路徑
function isActive(path) {
  return route.path === path;
}
</script>
<style scoped>
@import "@/styles/settings.scss";
.background {
  background-color: var(--background);
}
.bg-primary {
  background-color: var(--primary);
}
.texts-primary {
  color: var(--primary);
}
.asideMenu {
  background-color: var(--asideMenu);
}
/* vuetify的border無法切換顏色，這邊改自己寫 */
.borders-primary {
  border-left: 3px solid var(--border);
}
</style>

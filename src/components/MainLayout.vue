<template>
  <v-app
    :class="{ dark: isDarkMode }"
    class="background texts-primary"
  >
    <v-layout
      style="height: 100dvh; overflow: hidden"
      class="background"
    >
      <v-app-bar
        scroll-behavior="elevate"
        height="85"
        :style="{ backgroundColor: 'var(--background)' }"
      >
        <div class="d-flex justify-space-between w-100 align-center mx-7 h-100">
          <!-- Logo -->
          <svg-icon
            name="logo"
            class="texts-primary"
            width="130"
          />
          <!-- 切換主題顏色 -->
          <div class="d-flex ga-5 align-center">
            <button
              class="texts-primary"
              @click="toggleTheme"
            >
              切換
            </button>
            <!-- 通知 -->
            <v-badge
              :color="!isDarkMode ? '#FD4D4F' : '#C62828'"
              content="10"
              class="cursor-pointer "
            >
              <svg-icon
                width="22"
                name="notifications"
                class="texts-primary mr-1"
              />
            </v-badge>
            <!-- 使用者頭貼+名稱+hover選單 -->
            <v-menu open-on-hover>
              <template #activator="{ props }">
                <div
                  v-bind="props"
                  class="d-flex justify-space-between align-center cursor-pointer texts-primary"
                >
                  <v-avatar
                    :image="avatar"
                    size="36"
                  />
                  <span class="mx-1">{{ name }}</span>
                  <svg-icon
                    name="down"
                    class="mr-3"
                  />
                </div>
              </template>
              <!-- 這邊的v-list 試了使用p-0沒有效果，還是需要使用:deep -->
              <v-list
                v-model="menuVisible"
                class="mt-1 p-0 list-container"
              >
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  class="texts-primary-gray py-2"
                  min-height="32"
                >
                  <div class="d-flex align-center">
                    <svg-icon
                      :name="item.iconName"
                      width="16"
                      class="mr-1"
                    />
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-app-bar>
      <!-- 參照網址去設定斷點以及寬度 https://vuetifyjs.com/zh-Hans/api/v-navigation-drawer/#props-close-delay -->
      <v-navigation-drawer
        :mobile-breakpoint="992"
        :width="250"
        class="asideMenu rounded-te-50 border-none d-flex flex-column justify-space-between"
      >
        <!-- 這邊因為vuetify還是需要使用深度選擇器(v-deep)才可以指定v-navigation-drawer自動包裹的下一層
       v-navigation-drawer__content ，所以我不用(v-deep)方法，改用自己再包<div>才可以是我想要的排版。
       這個部分沒有解決在未來裝修圖說我們一直遇到的問題。"還是不夠客製化"-->
        <div
          class="d-flex flex-column justify-space-between"
          style="height: 100%"
        >
          <v-btn
            class="rounded-50 texts-primary mt-10 d-flex mx-auto texts-md"
            :width="140"
            :height="40"
            variant="outlined"
          >
            <svg-icon
              name="plus"
              class="mr-3"
            />
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
                  'nav-content': !isActive(item.path),
                  'active-nav-content': isActive(item.path),
                }"
                class="texts-primary w-100 d-flex rounded-0 justify-start texts-md"
                :height="50"
                variant="text"
              >
                <svg-icon
                  :name="item.icon"
                  width="22"
                  class="mr-3"
                />
                {{ item.name }}
              </v-btn>
            </v-list-item>
          </v-list>
          <div class="mt-auto">
            <v-btn
              class="rounded-50 texts-secondary-color mt-10 d-flex mx-auto texts-md"
              :width="140"
              :height="40"
              variant="outlined"
            >
              <svg-icon
                name="download"
                class="mr-3"
              />
              APP下載
            </v-btn>
            <v-sheet
              class="d-flex align-center mx-auto mt-5 mb-2"
              max-width="200"
              rounded="lg"
            >
              <v-progress-linear
                rounded
                class="progress-bg-color texts-secondary-color"
                model-value="20"
                :height="8"
              />
            </v-sheet>
            <div
              class="texts-secondary-gray d-flex justify-space-between mx-6 mb-5 texts-md"
            >
              <p>空間容量</p>
              <p>
                <span class="texts-secondary-color">71.41G</span> &#47; 103G
              </p>
            </div>
          </div>
          <v-btn
            class="texts-primary-gray w-100 d-flex rounded-0 justify-center background-hover texts-md"
            :height="45"
            variant="text"
          >
            <svg-icon
              width="22"
              name="logout"
              class="mr-3 texts-primary"
            />
            登出
          </v-btn>
        </div>
      </v-navigation-drawer>
      <v-main style="overflow-y: auto">
        <div class="overflow mx-7 h-100">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import menuItems from "@/components/MenuItems.json"
import avatar from "@/assets/images/avatar.jpg"
import { ref, provide } from "vue"
import { useRoute } from "vue-router"
const isDarkMode = ref(false)
provide('isDarkMode', isDarkMode)
//  menuVisible: false,
const menuVisible = ref(false)
const route = useRoute()
const name = "陳經理"
const items = ref([
  { iconName: "back", title: "返回前台" },
  { iconName: "author", title: "作者主頁" },
  { iconName: "switch", title: "切換帳號" },
])
function toggleTheme () {
  isDarkMode.value = !isDarkMode.value
  // console.log(isDarkMode.value)
}
// 是否為點選的路徑
function isActive (path) {
  return route.path === path
}

</script>
<style scoped>
@import "@/styles/settings.scss";
:deep(.list-container) {
  padding: 0;
  
}
/* 還是要看F12的Elements才可以蓋掉預設的box-shadow的CSS */
.v-menu > .v-overlay__content > .v-list {
  box-shadow: 2px 2px 2px 0px #00000040;
}
</style>

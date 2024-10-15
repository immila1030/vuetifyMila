<template>
  <v-app>
    <v-layout
      class="rounded rounded-md"
      style="height: 100dvh; overflow: hidden"
    >
      <v-app-bar title="Application bar"></v-app-bar>
      <!-- 參照網址去設定斷點以及寬度 https://vuetifyjs.com/zh-Hans/api/v-navigation-drawer/#props-close-delay -->
      <v-navigation-drawer :mobile-breakpoint="992" :width="250">
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="d-flex flex-column" style="overflow-y: auto">
        <div class="overflow">
          <p>Main Content</p>
          <p class="hidden" v-for="i in 50" :key="i">Item {{ i }}</p>
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts"></script>

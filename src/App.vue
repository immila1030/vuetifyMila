<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>

<!--  這邊是如果在vite.config.mts使用autoImport: false ，就需要用這種方式導入組件，它就會依據這個組件安裝所需的css。
<template>
<v-card>
    <v-card-title>...</v-card-title>
    <v-card-text>...</v-card-text>
  </v-card> 
</template>

<script setup>
  import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'
</script>
-->
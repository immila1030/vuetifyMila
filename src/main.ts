/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins"
// 在此之前先在終端機安裝tailwind，接著創建src裡的styles資料夾，檔案名稱styles.css(可自訂)
// import "../src/styles/settings.scss";
// import "../src/styles/styles.css"; //需在這導入tailwind的css
import "./styles/generic/_index.scss"
import 'virtual:svg-icons-register'
// Components
import App from "./App.vue"
// Composables
import { createApp } from "vue"

const app = createApp(App)

registerPlugins(app)

app.mount("#app")

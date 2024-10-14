/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import "../src/styles/styles.css";
// Components
import App from "./App.vue";
// C:\Users\littl\Desktop\vuetifyMila\src\styles\styles.css
// C:\Users\littl\Desktop\vuetifyMila\src\index.css
// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

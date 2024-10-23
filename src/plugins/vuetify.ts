/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles"
import "@/styles/settings.scss"
import "@/styles/styles.css"
// Composables
import { createVuetify } from "vuetify"
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
}

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
})

/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/styles/settings.scss";
import "@/styles/styles.css";
// Composables
import { createVuetify } from "vuetify";

// // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // background: "#F6F6F6",
    // surface: "#FFFFFF",
    // primary: "#015C61",
    // hover: "#FFFFFF",
    // "primary-darken-1": "#3700B3",
    // secondary: "#03DAC6"
    // "secondary-darken-1": "#018786",
    // error: "#FD4D4F",
    // warning: "#EB9717",
    // something: "#015C61",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

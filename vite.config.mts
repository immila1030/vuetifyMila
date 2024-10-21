// Plugins
import Components from 'unplugin-vue-components/vite';
import Vue from '@vitejs/plugin-vue';
// 可參考官方文件的treeshaking方法 https://vuetifyjs.com/en/features/treeshaking/
// 這邊是安裝vite-plugin-vuetify的文件 https://www.npmjs.com/package/vite-plugin-vuetify
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'; //vite-plugin-vuetify自動處理組件導入與樣式，只有使用的組件才會被導入。(支持treeshaking[樹搖])
import ViteFonts from 'unplugin-fonts/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
// Utilities
import { defineConfig } from 'vite';
// import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true, //這邊如果是true，那會自動幫我們引用vuetify的組件。如果是false則我們需要自己引入組件。
      // 我的使用vuetify和Tailwind的CSS優缺點連結：
      // https://www.notion.so/vuetify-Tailwind-CSS-121d1f8123ad80239deacd4243c5a1e3?pvs=4
      styles: {
        configFile: 'src/styles/settings.scss', //自定義的vuetify的CSS
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
    visualizer({
      filename: 'stats.html', // 生成分析檔案的文件名稱
      open: true, // 是否以預設的代理伺服器打開分析檔案
      gzipSize: true, //是否蒐集gzip壓縮檔的大小到分析文件
      brotliSize: true, //是否蒐集brotli壓縮檔的大小到分析文件
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svgs")],
      // 指定symbolId格式
      symbolId: "[name]",
      customDomId: "turing-planet-svgs", // 避免多项目互相影响
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    host: '0.0.0.0',
  },
});

import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      vue: pluginVue
    },
    rules: {
      'no-unused-vars': 'warn',
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      "vue/order-in-components": ["error", {
        "order": [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError",
          'watch',
          'mounted',
        ]
      }]
    },
  },
  // JavaScript 推薦設定
  {
    ...pluginJs.configs.recommended,
  },
  // TypeScript 推薦設定
  {
    ...tseslint.configs.recommended[0],
    rules: {
      ...tseslint.configs.recommended[0].rules,
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  // ...tseslint.configs.recommended,
  // Vue 推薦設定
  ...pluginVue.configs["flat/essential"],
  // 對 Vue 文件使用特定的解析器
  {
    files: ["src/**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    }
  },
  {
    // 取消檢查dist檔案
    files: ["dist/**/*"],
    rules: {
      "no-unused-vars": "off",//取消檢查未使用變數
      "no-undef": "off",//取消檢查未定義變數
      "no-prototype-builtins": "off", //取消檢查hasOwnProperty(Object.prototype的hasOwnProperty)
      "no-setter-return": "off", //取消檢查 setter
      "no-empty": "off", //取消檢查 空區塊 (if (true))
      "no-cond-assign": "off",//取消檢查 條件式出現賦值 (if(x=1))
      "no-useless-escape": "off", // 取消檢查轉義字符 (如報錯的 \/)
      "no-case-declarations": "off", //取消檢查switch的cass聲明變數
    },
  },
  
]

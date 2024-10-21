/**
 * .eslint.js
 *
 * ESLint configuration file.
 */
// https://eslint.vuejs.org/rules/order-in-components
// 參考上面網站，目前尚未尋找到可以指定<script>內部規則
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
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
        "renderError"
      ]
    }]
  },
  overrides: [
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
  ],
}

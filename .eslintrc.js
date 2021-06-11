module.exports = {
  env: {
    //설정 환경에서 동작하는 코드 검사
    browser: true,
    node: true
  },
  //코드 검사할 규칙
  extends: [
    //vue
    // 'plugin:vue/vue3-essential', //Lv1
    'plugin:vue/vue3-strongly-recommended', //Lv2
    // 'plugin:vue/vue3-recommended', //Lv3 *권장*
    //js 
    'eslint:recommened'
  ],
  parserOption: {
    //코드 분석기
    parser: 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}
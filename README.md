# Vue3 Webpack template

1. js 폴더 삭제

2. src 폴더 생성

3. src 폴더 안에 main.js / App.vue 파일 생성

4. vue.js 설치 //기본 문법 해석
  npm i vue@next

5. 파일 관리 패키지 설치  
  npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc

6. webpack config.js 파일 수정
```js
const { VueLoaderPlugin } = require('vue-loader') //*** 추가

module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: './src/main.js', // *** 위치 수정

  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), //node.js에서 필요로 하는 절대 경로
    // filename: 'main.js',
    clean: true 
  },

  module: {
    rules: [
      // *** vue-loader 추가
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/, 
        use: [
          //순서중요 (역순으로 해석)
          'vue-style-loader',  /// *** 추가
          'style-loader',
          'css-loader',
          'postcss-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({ 
      patterns: [
        { from: 'static'} 
      ]
    }),
    new VueLoaderPlugin() // *** 추가
  ],
  devServer: {
    host: 'localhost'
  }
}
```


npm i -D eslint eslint-plugin-vue babel-eslint
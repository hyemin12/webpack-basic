# Webpack
## 공식 홈페이지
https://webpack.js.org/

## 설치방법

1. npm  i -D webpack webpack-cli webpack-dev-server@next

2. package.json에 작성
```json
  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  }
```

## webpack 구성옵션 작성

1. webpack.config.js 파일 생성

2.
```js
//node.js 환경에서 언제든지 가져와서 사용할 수 있는 전역 모듈
const path = require('path'); 


module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js', 

  //결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, 'dist'), //node.js에서 필요로 하는 절대 경로
    filename: 'main.js',
    clean: true //기존에 만들었던 파일들 삭제
   }
```

## webpack Html 

1. npm i -D html-webpack-plugin 

2. webpack.config.js에 작성
```js
const HtmlPlugin = require('html-webpack-plugin')

// output 아래 작성
//번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ]

3. npm run dev
```

*** local host로 나온다면 webpack.config.js에 작성
```js
//plugins 다음으로 작성
devServer: {
  host: 'localhost'
}
```

## 정적파일 연결

1. npm i -D copy-webpack-plugin

2. webpack.config.js에 작성

```js
const CopyPlugin = require('copy-webpack-plugin')

new CopyPlugin({ //dist라는 폴더로 들어갈 수 있도록
  patterns: [
    { from: 'static'} //static이라는 폴더
  ]
})
```

## css 연결하기

1. main.js에 import 하기 //'import './css/main.css'

//css 읽을 수 있게 해주는 패키지 설치
2. npm i -D css-loader style-loader

3. webpack.config.js에 작성
```js
 module: {
    rules: [
      {
        test: /\.css$/, //.css로 끝나는 파일 찾기
        use: [
          'style-loader',  //css 파일 실제 삽입해주는 용도
          'css-loader'  //css 파일 해석하는 용도
        ]
      }
    ]
  }

  *** scc

  npm i -D sass-loader sass

  test: /\.s?css$/, //.css, .scss로 끝나는 파일 찾기
```

## autoprefixer

1. npm i -D postcss autoprefixer postcss-loader

2. .postcssrc.js 파일 생성 후 작성
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

3. package.json에 작성
```json
"browerslist": [
  "> 1%",
  "last 2 version"
]
```

4. webpack.config.js에 작성
```js
module: {
    rules: [
      {
        test: /\.s?css$/, 
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',  // 추가작성!!
          'sass-loader'
        ]
      },
```


## babel

1. npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime

2. .babelrc.js 파일 생성 후 작성
```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/[plugin-transform-runtime']
  ]
}
```

3. webpack.config.js에 작성
```js
{
  test: /\.js$/,
  use: [
    'babel-loader'
  ]
}
```
4. npm i -D babel-loader


## netlity 배포


# 云于天官网

## 安装

```shell
npm install
```

### 本地运行并实时预览

```shell
npm run serve
```

### 生产环境打包

```shell
npm run build
```

## 性能优化

### 利用 import() 异步引入组件实现按需引入

```js
function loadView(component) {
  // [request]表示实际解析的文件名
  return () => import(/* webpackChunkName: "[request]" */ `views/${component}`)
}
```

### 打包分析图

```shell
npm install webpack-bundle-analyzer --save-dev
```

`vue.config.js` 中配置：

```js
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
}
```

运行 `npm run serve` 即弹出报告图。

### externals 提取依赖包

```js
// cdn预加载使用
const externals = {
  vue: "Vue",
  "vue-router": "VueRouter",
  vuex: "Vuex",
  axios: "axios",
  jquery: "jQuery",
  'AMap': 'AMap' // 高德地图配置
};

const cdn = {
  // 开发环境
  dev: {
    css: [
      // "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
      // "https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css",
    ],
    js: ["https://at.alicdn.com/t/font_2002270_irvdc1go0fn.js"],
  },
  // 生产环境
  build: {
    css: [
      "https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css",
      "https://cdn.bootcdn.net/ajax/libs/bootstrap-vue/2.16.0/bootstrap-vue.min.css",
    ],
    js: [
      "https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver", // 兼容旧浏览器
      "https://at.alicdn.com/t/font_2002270_irvdc1go0fn.js", // iconfont字体图标
      "https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.runtime.min.js",
      "https://cdn.bootcdn.net/ajax/libs/bootstrap-vue/2.6.1/bootstrap-vue.min.js",
      "https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js",
      "https://cdn.bootcdn.net/ajax/libs/vuex/3.2.0/vuex.min.js",
      "https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js",
      "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.slim.min.js",
      "http://webapi.amap.com/maps?v=1.4.4&key='d5b8ac92271c1c9785b384c9b83ce8b5'"
    ],
  },
};

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      if (prodEnv) {
        args[0].cdn = cdn.build;
      }
      if (!prodEnv) {
        args[0].cdn = cdn.build;
      }
      return args;
    });
  },
};
```

`index.html` 中引入 cdn ：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>

    <!-- 使用CDN加速的CSS文件，配置在vue.config.js下 -->
    <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style">
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet">
    <% } %>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- 使用CDN加速的JS文件，配置在vue.config.js下 -->
    <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
    <% } %>
  </body>
</html>
```

### 图片压缩

安装：

```shell
npm install image-webpack-loader --save-dev
```

`vue.config.js` 中配置：

```js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('imageWebpackLoader')
      .loader('image-webpack-loader')
  },
}
```


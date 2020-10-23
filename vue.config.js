const webpack = require("webpack");
const path = require("path");

const prodEnv = process.env.NODE_ENV === "production"

function resolve(dir) {
	return path.join(__dirname, dir);
}

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
	publicPath: prodEnv ? "/" : "/",
	/* 输出文件目录：在npm run build时，生成文件的目录名称 */
	outputDir: "dist",
	/* 放置生成的静态资源 (js、css、img、fonts) 的目录 */
	assetsDir: "assets",
	/* 是否在构建生产包时生成 sourceMap 文件，设置为 false 以加速生产环境构建*/
	productionSourceMap: false,
	/* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
	filenameHashing: true,
	/* 代码保存时进行eslint检测 */
	// lintOnSave: true,
	devServer: {
		/* 自动打开浏览器 */
		open: true,
		/* 设置为0.0.0.0则所有的地址均能访问 */
		host: "0.0.0.0",
		port: 8090,
		https: false,
		hotOnly: false,
		/* 使用代理 */
		// proxy: {
		// 	'/api': {
		// 		/* 目标代理服务器地址 */
		// 		target: 'http://localhost:9005/',
		// 		/* 允许跨域 */
		// 		changeOrigin: true,
		// 	},
		// },
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set("components", resolve("src/components"))
			.set("views", resolve("src/views"))
			.set("common", resolve("src/common"));

		if (!prodEnv) {
			// 开发环境下，分析包结构
			config
				.plugin("webpack-bundle-analyzer")
				.use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
		}
		config.module
			.rule("images")
			.use("imageWebpackLoader")
			.loader("image-webpack-loader");

		config.plugin("html").tap((args) => {
			if (prodEnv) {
				args[0].cdn = cdn.build;
			}
			if (!prodEnv) {
				args[0].cdn = cdn.build;
			}
			args[0].title = '云于天 | 首页';
			return args;
		});
	},
	configureWebpack: (config) => {
		if (prodEnv) { // 生产环境下 移除log日志
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
		}
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
				Popper: ["popper.js", "default"],
			})
		);
		config.externals = externals;
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require("postcss-pxtorem")({
						// remUnit: 192, //基准大小 baseSize，需要和rem.js中相同
						// 把px单位换算成rem单位
						rootValue: 16, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
						// unitPrecision: 3, //允许REM单位增长到的十进制数字,小数点后保留的位数。
						// propList: ["*", "!font-size"],
						propList: ["*"],
						exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
						// selectorBlackList: [".radius"], //要忽略并保留为px的选择器
						// mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
						// minPixelValue: 5, //设置要替换的最小像素值(3px会被转rem)。 默认 0
					}),
				],
			},
			sass: {
				prependData: `@import "~@/styles/custom-bootstrap.scss";`,
			},
		},
	},
};
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from '@/lib/moment/moment.min.js'
import storage from '@/common/storage/index.js'
import utils from '@/utils'
import * as filters from '@/common/filters'
import appConfig from '@/common/config/config'

// 引入 Bootstrap & jQuery
// import "bootstrap/dist/css/bootstrap.css"
// import 'bootstrap';
import '@/styles/custom-bootstrap.scss'
// import "jquery"

// 引入 BootstrapVue
// import BootstrapVue from "bootstrap-vue";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Vue.use(BootstrapVue);

// 按需引入 BootstrapVue
// import { LayoutPlugin } from "bootstrap-vue";
// Vue.use(LayoutPlugin);

// import { DropdownPlugin } from 'bootstrap-vue'
// Vue.use(DropdownPlugin)

// import { NavPlugin, NavbarPlugin } from 'bootstrap-vue'
// Vue.use(NavPlugin).use(NavbarPlugin);

// import { ImagePlugin, LinkPlugin, ButtonPlugin } from 'bootstrap-vue'
// Vue.use(ImagePlugin).use(LinkPlugin).use(ButtonPlugin);

// import {
// 	FormPlugin,
// 	FormInputPlugin,
// 	FormTextareaPlugin,
// 	PaginationPlugin,
// } from "bootstrap-vue";
// Vue.use(FormPlugin).use(FormInputPlugin).use(FormTextareaPlugin).use(PaginationPlugin);
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
	// 高德key
	key: 'd5b8ac92271c1c9785b384c9b83ce8b5',
	// 插件集合 （插件按需引入）
	plugin: ['AMap.Geolocation']
});
// 引入 vue-meta
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

// 引入进度条组件
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
	color: '#0084F9',
	failedColor: 'red',
	height: '2px',
})

// 引入toast组件
// github：https://github.com/shakee93/vue-toasted
import Toasted from 'vue-toasted'
Vue.use(Toasted, {
	position: 'top-center',
	duration: 2000,
	iconPack: 'custom-class',
})

// 引入 fontawesome 字体
// website: https://fontawesome.com/icons?d=gallery&m=free
// format：<i class="fa fa-times"></i>
// 常用：
// 感叹号：fa fa-exclamation
// 错误： fa fa-times
import 'font-awesome/css/font-awesome.min.css'

// 自定义全局组件
import IconSvg from '@/components/common/IconSvg.vue'
Vue.component('icon-svg', IconSvg)

// 自定义表单验证组件
import SwForm from '@/components/common/swForm/swForm'
import SwFormItem from '@/components/common/swForm/swFormItem'
import SwInput from '@/components/common/swForm/swInput'
Vue.component('sw-form', SwForm)
Vue.component('sw-form-item', SwFormItem)
Vue.component('sw-input', SwInput)

// 自定义标题
import SupTitle from '@/components/common/supTitle'
Vue.component('sup-title', SupTitle)

// 自定义卡片
import CardList from '@/components/common/CardList'
Vue.component('card-list', CardList)

// 添加全局过滤器
let filterObj = {} // 全局filter obj
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key])
	filterObj[key] = filters[key]
})

// 扩展vue原型属性
prototypeEx(Vue)
// 扩展Vue原型
function prototypeEx(Vue) {
	// vue prototype 扩展
	Vue.prototype.$moment = moment // 加入 moment使用
	Vue.prototype.$storage = storage // 用于存储
	Vue.prototype.$utils = utils // 帮助类
	Vue.prototype.$filter = filterObj // 全局过滤
	Vue.prototype.$appConfig = appConfig // app配置
}

Vue.config.productionTip = false

const vm = new Vue({
	router,
	data() {
		return {
			title: '云于天',
			titleTemplate: '%s | 构建商家与消费者共赢的智慧生活圈',
			keywords: '餐饮,管理,智能',
			description: '构建商家与消费者共赢的智慧生活圈',
		}
	},
	metaInfo() {
		return {
			title: this.$store.state.metaInfo.title,
			meta: [{
					name: 'keywords',
					content: this.$store.state.metaInfo.keywords,
				},
				{
					name: 'description',
					content: this.$store.state.metaInfo.description,
				},
			],
		}
	},
	store,
	render: (h) => h(App),
	...App,
}).$mount('#app')

export default vm
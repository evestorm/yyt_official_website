import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import {
	metaInfo
} from '@/utils/const'

function loadView(component) {
	// [request]表示实际解析的文件名
	return () =>
		import( /* webpackChunkName: "[request]" */ `@/views/${component}`)
}

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "home",
		component: loadView("Home"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 首页",
			},
			isBaiduCount: true,
		},
	},
	{
		path: "/project",
		name: "project",
		component: loadView("Project"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 方案",
			},
			isBaiduCount: true,
		},
	},
	{
		path: "/product",
		name: "product",
		component: loadView("Product"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 产品",
			},
			isBaiduCount: true,
		},
		children: [
			// { path: "", component: loadView("Product") },
			{
				path: "reserve",
				name: "reserve",
				component: loadView("Product/Reserve"),
				meta: {
					metaInfo: {
						...metaInfo,
						title: "云于天 | 预定管理",
					},
					isBaiduCount: true,
				},
			},
			{
				path: "customer",
				name: "customer",
				component: loadView("Product/Customer"),
				meta: {
					metaInfo: {
						...metaInfo,
						title: "云于天 | 客户管理",
					},
					isBaiduCount: true,
				},
			},
			{
				path: "banquet",
				name: "banquet",
				component: loadView("Product/Banquet"),
				meta: {
					metaInfo: {
						...metaInfo,
						title: "云于天 | 宴会管理",
					},
					isBaiduCount: true,
				},
			},
			{
				path: "marketing",
				name: "marketing",
				component: loadView("Product/Marketing"),
				meta: {
					metaInfo: {
						...metaInfo,
						title: "云于天 | 营销管理",
					},
					isBaiduCount: true,
				},
			},
		],
	},
	{
		path: "/about",
		name: "about",
		component: loadView("About"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 关于我们",
			},
			isBaiduCount: true,
		},
	},
	{
		path: "/news",
		name: "news",
		component: loadView("News"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 资讯",
			},
			isBaiduCount: true,
		},
	},
	{
		path: "/NewsInfo",
		name: "NewsInfo",
		component: loadView("News/NewsInfo"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 资讯",
			},
			isBaiduCount: true,
		},
	},
	{
		path: "*",
		redirect: "/home",
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	// 设置页面meta标签信息
	if (to.meta.metaInfo) store.commit('CHANGE_META_INFO', to.meta.metaInfo)
	// 监听路由，改变当前导航栏高亮状态
	store.commit('CHANGE_CUR_ROUTE_NAME', to.name)
	next()

	// 路由变化后滚动到顶部
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

// 全局路由后置守卫
router.afterEach((to, from) => {
	// 控制页面加入百度统计 统计的需要关联当前门店的ID
	if(to.meta && to.meta.isBaiduCount){
		Vue.prototype.$utils.baiduPageView(to.path);
	}
})

export default router
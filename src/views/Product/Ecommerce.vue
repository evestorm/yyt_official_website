<template>
	<div class="ecommerce">
		<!-- 头部封面 -->
		<div class="hero-wrapper position-relative">
			<b-img fluid-grow alt="客户管理系统" :src="$appConfig.picdomain + '/upload/20201023/1634593459_线上电商平台.png'"></b-img>
			<h1 class="res-h1 position-absolute hero-title text-break text-center">线上电商平台</h1>
		</div>
		<!-- 功能图片介绍1 -->
		<b-container style="padding: 3% 0;">
			<b-row class="justify-content-md-center align-items-center ">
				<b-col class="col-xs-6 pd2" xs="6" sm="6" md="3">
					<b-img class="mid-img img-margin" fluid-grow :src="$appConfig.picdomain + '/upload/20201023/164402442_ecommerce1.png'"></b-img>
				</b-col>
				<b-col class="mid-project-list offset-1 col-xs-8 paragraph" align-self="start" xs="6" sm="6" md="4">
					<div class="line"></div>
					<h5>自营电商平台, 无平台抽成</h5>
					<p class="font-grad font-s1">自有外卖平台 , 无平台抽成 , 对接三方平台 , 提升配送力 。</p>
				</b-col>
			</b-row>
		</b-container>
		<!-- 中部封面 -->
		<div class="hero-wrapper position-relative">
			<b-img fluid-grow alt="客户管理系统" :src="$appConfig.picdomain + '/upload/20201023/1719541954_bg2.png'"></b-img>
			<div class="img-in-content" style="color: #fff;">
				<b-row class="justify-content-md-center align-items-center wh100">
					<b-col class="mid-project-list offset-1 col-xs-8 paragraph" align-self="start" xs="6" sm="6" md="4">
						<div class="line" style="background-color: #fff;"></div>
						<h5>客户扫码下单，方便快捷</h5>
						<p class=" font-s1">顾客微信扫码即可点单，方便快捷。顾客门店中心，整合个人权益， 优惠活动，订单管理，门店推广。</p>
					</b-col>
					<b-col class="col-xs-6 img-pd2 h100" xs="6" sm="6" md="3">
						<b-img class="h100" :src="$appConfig.picdomain + '/upload/20201026/0924532453_icon2.png'"></b-img>
					</b-col>
				</b-row>
			</div>
		</div>
		<!-- 中部封面小屏时介绍图片 -->
		<b-container class="img-pd3" style="padding: 3% 0;">
			<b-row class="justify-content-md-center align-items-center ">
				<b-col class="col-xs-6 pd2" xs="6" sm="6" md="3">
					<b-img class="mid-img img-margin" fluid-grow :src="$appConfig.picdomain + '/upload/20201026/0924532453_icon2.png'"></b-img>
				</b-col>
				<b-col class="mid-project-list offset-1 col-xs-8 paragraph" align-self="start" xs="6" sm="6" md="4">
					<div class="line"></div>
					<h5>多种营销活动,提高单量和单价</h5>
					<p class="font-grad font-s1">支持团购券，满减券，折扣券，兑换券。 支持秒杀活动，支持分销体系。 支持会员卡支付，积分抵现。</p>
				</b-col>
			</b-row>
		</b-container>
		<!-- 功能图片介绍2 -->
		<b-container style="padding: 3% 0;">
			<b-row class="justify-content-md-center align-items-center ">
				<b-col class="col-xs-6 pd2" xs="6" sm="6" md="3">
					<b-img class="mid-img img-margin" fluid-grow :src="$appConfig.picdomain + '/upload/20201023/1722232223_ecommerce2.png'"></b-img>
				</b-col>
				<b-col class="mid-project-list offset-1 col-xs-8 paragraph" align-self="start" xs="6" sm="6" md="4">
					<div class="line"></div>
					<h5>多种营销活动,提高单量和单价</h5>
					<p class="font-grad font-s1">支持团购券，满减券，折扣券，兑换券。 支持秒杀活动，支持分销体系。 支持会员卡支付，积分抵现。</p>
				</b-col>
			</b-row>
		</b-container>
		<!-- ========================= 联系我们 START ========================= -->
		<contact-us></contact-us>
	</div>
</template>

<script>
import ContactUs from 'components/common/ContactUs';
export default {
	name: 'ecommerce',
	components: {
		ContactUs
	},
	data() {
		return {};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
// 通用属性
.h100 {
	height: 100%;
}
.wh100 {
	width: 100%;
	height: 100%;
	margin: 0;
}
.font-grad {
	color: #666666;
}
.font-s1 {
	font-size: 1rem;
}
// 中部封面背景图
.img-pd2 {
	padding: 2% 0;
	box-sizing: border-box;
}
.img-pd3 {
	display: none;
}
.pd2 {
	padding: 0 2rem;
	box-sizing: border-box;
}
.img-in-content {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
}
// 段落样式
.paragraph {
	margin-top: 3rem;
	.line {
		display: block;
		width: 2.75rem;
		height: 0.1875rem;
		background: #3385ff;
		margin-left: 1rem;
	}
	h5 {
		margin-top: 2rem;
		padding: 0 1rem;
	}
	p {
		padding: 0 1rem;
	}
}
// 小屏情况下样式修改
@media (max-width: 576px) {
	.paragraph {
		margin: 0;
		h5 {
			margin-top: 1rem;
		}
	}
	.img-margin {
		margin: 2rem 0;
	}
	.img-pd3 {
		display: block;
	}
	.img-pd2 {
		display: none;
	}
}
// 封面
.hero-wrapper {
	.hero-title {
		// font-size: 80px;
		font-weight: 400;
		color: white;
		text-shadow: 0px 7px 7px rgba(0, 0, 0, 0.33);
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>

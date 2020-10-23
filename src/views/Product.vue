<template>
   <router-view />
</template>


<script>
import ContactUs from 'components/common/ContactUs';

export default {
   name: 'Product',
   components: {
      ContactUs,
   },
   data () {
      return {
         showSelf: 1,
         cardList: [{
            icon: 'icon-chanpin02-kehuzhinengfenji',
            title: '客户智能分级',
            desc: '根据消费频次，消费金额，消费时间自动将客户分级'
         }, {
            icon: 'icon-chanpin02-genzongkehuzidongtuisong',
            title: '跟踪客户自动推送',
            desc: '自动推送需要跟踪的客户'
         }, {
            icon: 'icon-chanpin02-zhinengkehubiaoqian',
            title: '智能客户标签',
            desc: '满足标签条件客户自动打上标签，精准跟踪'
         }, {
            icon: 'icon-chanpin02-qunfaduanxingongju',
            title: '群发短信工具，告别重复编辑',
            desc: '一键预览，防错机制，避免短信错误'
         }, {
            icon: 'icon-chanpin02-zidingyiduozhongduanxinmoban',
            title: '自定义多种短信模版，提高跟踪效率',
            desc: '预订短信模版，跟踪短信模版'
         }, {
            icon: 'icon-chanpin02-duijieshoujitongxunlu',
            title: '对接手机通讯录，客户跟踪不流失',
            desc: 'app直接查看手机客户，避免遗漏'
         },]
      }
   },
   computed: {
      card1 () {
         return this.cardList.slice(0, 3)
      },
      card2 () {
         return this.cardList.slice(3)
      },
      card1TitleInfo () {
         return {
            title: '价值客户智能挖掘',
            desc: '',
         }
      },
      card2TitleInfo () {
         return {
            title: '多种工具助力客户跟踪',
            desc: '',
         }
      },
   },
}
</script>

<style lang="scss" scoped>
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

.sw-container {
   padding: 0 0 60px 0;

   .card-wrapper {
      .row {
         margin: 0;
      }

      // margin: 30px 0;
   }
}

.section {
   padding: 40px 0;
   position: relative;

   &.screenshots1::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: center / cover no-repeat
         url("https://pic.cwyyt.cn/upload//20200822/1654285428_数据驱动.png");
   }

   .section-main {
      margin-top: 50px;

      .box {
         .img {
            width: 100%;
            max-width: 340px;
            max-height: 460px;
            margin-bottom: 20px;
         }

         .desc {
            font-size: 20px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            text-shadow: 0px 7px 7px rgba(0, 0, 0, 0.2);
         }
      }
   }

   &.screenshots2 .section-main .box .desc {
      color: rgba(51, 51, 51, 1) !important;
      text-shadow: none;
   }
}
</style>
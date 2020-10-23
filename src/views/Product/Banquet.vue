<template>
   <div class="banquet">
      <div class="position-relative">
         <!-- 顶部图片 -->
         <!-- <b-row align-h="center" class="title-wrapper position-relative"> -->
         <b-col class="text-center"
            style="padding:0;">
            <b-img :src="
            $appConfig.picdomain + '/upload//20200820/1329512951_组 10@2x.png'
          "
               fluid-grow
               alt="宴会页Banner图"></b-img>
            <h1 class="res-h1 title position-absolute d-none d-sm-block">
               宴会管理系统
            </h1>
            <b-col class="ab-text d-xs-none d-sm-block position-absolute col-md-8"
               xs="12"
               sm="8"
               md="6">
               <div>定义宴会执行标准，管控执行流程</div>
               <div>全面提高宴会服务水平，获得回头客</div>
            </b-col>
            <h1 class="d-xs-flex d-sm-none res-h1 title-xs position-absolute">
               宴会管理系统
            </h1>
            <b-col class="ab-text1 d-xs-flex d-sm-none col-xs-12"
               xs="12"
               sm="12"
               md="6">
               <div>定义宴会执行标准，管控执行流程</div>
               <div>全面提高宴会服务水平，获得回头客</div>
            </b-col>
         </b-col>
         <!-- </b-row> -->
         <div style="width:100%;height:140px;"
            slass="d-none d-xs-none d-sm-flex"></div>
         <b-container style="padding: 3% 0;">
            <b-row align-h="center"
               class="justify-content-md-center align-items-center ">
               <b-col class="col-xs-6"
                  xs="6"
                  sm="6"
                  md="3">
                  <b-img class="mid-img"
                     fluid-grow
                     :src="
                $appConfig.picdomain +
                  '/upload//20200820/1334173417_组 10@2x(1).png'
              "></b-img>
               </b-col>
               <b-col class="mid-project-list offset-1 col-xs-8"
                  xs="6"
                  sm="6"
                  md="4">
                  <div class="before-div1">01：多渠道线索获取</div>
                  <div class="before-div2">02：线索二次跟进</div>
                  <div class="before-div3">03：宴会成交跟进</div>
                  <div class="before-div4">04：宴会流程任务可视化</div>
                  <div class="before-div5">05：客户评价</div>
                  <div class="before-div6">06：数据运营分析</div>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <div class="banquet-foot">
         <b-container>
            <b-row class="card-wrapper">
               <b-col class="sw-col"
                  xs="12"
                  sm="6"
                  md="3"
                  v-for="(item, idx) in banquetProArr"
                  :key="idx">
                  <div class="sw-card d-flex flex-column justify-content-center align-items-center">
                     <icon-svg class="icon"
                        :icon-class="item.icon" />
                     <p class="pt-5 pb-3"
                        style="width: 100%;">{{ item.text }}</p>
                  </div>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <!-- 联系我们 -->
      <contact-us></contact-us>
   </div>
</template>

<script>
import OurProducts from 'components/common/OurProducts'
import ContactUs from 'components/common/ContactUs'

export default {
   name: 'Banquet',
   data () {
      return {
         banquetProArr: [
            {
               icon: 'icon-chanpin03-zhinengxiansuohuoqu',
               text: '智能线索获取，线索信息高度匹配，智能算法线索挖掘',
            },
            {
               icon: 'icon-chanpin03-yanhuifuwu',
               text: '宴会服务标准化执行管控,任务执行流程一目了然',
            },
            {
               icon: 'icon-chanpin03-zhihangxiangmupingjia',
               text:
                  '执行项目评价，提升服务质量商家客户协同完成宴会执行，提升参与感',
            },
            {
               icon: 'icon-chanpin03-yanhuipaibanbiao',
               text: '宴会排班表，快速查看宴会预定情况',
            },
         ],
      }
   },
   components: {
      OurProducts,
      ContactUs,
   },
}
</script>

<style lang="scss" scoped>
// 顶部
.title {
   font-family: "SourceHanSansSC-Regular";
   text-shadow: rgba(0, 0, 0, 0.1) 7px 7px 7px;
   color: #fff;
   position: absolute;
   top: 32%;
   left: 50%;
   transform: translate(-50%, -50%);
}
.title-xs {
   font-family: "SourceHanSansSC-Regular";
   text-shadow: rgba(0, 0, 0, 0.1) 7px 7px 7px;
   color: #fff;
   position: absolute;
   top: 0;
   left: 50%;
   transform: translate(-50%, 50%);
}
.ab-text,
.ab-text1 {
   background: #fff;
   left: 50%;
   bottom: 0;
   transform: translate(-50%, 50%);
   font-size: 20px;
   color: #333;
   line-height: 30px;
   padding: 4%;
   box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.08);
   &::before {
      content: "";
      display: block;
      width: 44px;
      height: 3px;
      background: #3385ff;
      margin: 0 auto 20px;
   }
}
.ab-text1 {
   width: 80%;
}
.mid-img {
   width: 100%;
   height: auto;
}
.mid-project-list {
   .before-div1,
   .before-div2,
   .before-div3,
   .before-div4,
   .before-div5,
   .before-div6 {
      color: #333;
      font-size: 20px;
      &::before {
         content: "";
         display: inline-block;
         width: 12px;
         height: 12px;
         margin-right: 4px;
      }
   }
   .before-div1 {
      &::before {
         background: #3385ff;
      }
   }
   .before-div2 {
      &::before {
         background: #0dc1a3;
      }
   }
   .before-div3 {
      &::before {
         background: #9ebc59;
      }
   }
   .before-div4 {
      &::before {
         background: #ffb400;
      }
   }
   .before-div5 {
      &::before {
         background: #ff6c00;
      }
   }
   .before-div6 {
      &::before {
         background: #c42395;
      }
   }
}
.banquet-foot {
   background: center / cover no-repeat
      url("https://pic.cwyyt.cn/upload//20200820/2117461746_组 10@2x(2).png");
   .container {
      padding: 6% 0;
   }
   .card-wrapper {
      padding-bottom: 60px;
      overflow: hidden;
      .sw-col {
         margin: 20px 0;
         overflow: hidden;
      }
      .sw-card {
         position: relative;
         background: white;
         padding: 40px 27px 0;
         margin: 20px 0;
         text-align: center;
         margin: 0 0 -9999px 0;
         padding-bottom: 9999px;
         p {
            font-size: 16px;
            font-family: "PingFang-SC-Regular";
            color: #333;
         }
         &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 0;
            height: 2px;
            background: #3086ff;
            transition: 0.3s ease-in-out;
         }
         .icon {
            font-size: 66px;
         }
      }
   }
}
.row {
   margin: 0 !important;
}
@media (max-width: 575px) {
   .col-xs-6 {
      -ms-flex: 0 0 60%;
      flex: 0 0 60%;
      max-width: 60%;
   }
   .col-xs-8 {
      -ms-flex: 0 0 80%;
      flex: 0 0 80%;
      max-width: 80%;
   }
   .d-xs-none {
      display: none;
   }
}
</style>

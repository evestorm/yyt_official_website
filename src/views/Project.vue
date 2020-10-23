<template>
   <div class="project">
      <b-container class="sw-container project">
         <!-- 概述 -->
         <div class="overview-wrapper flex-column"
            align-h="center">
            <b-col class="title-wrapper text-center"
               col>
               <sup-title title="解决餐企经营挑战"></sup-title>
            </b-col>
            <b-col class="img-wrapper"
               col>
               <b-img :src="
              $appConfig.picdomain +
                '/upload//20200818/133006306_product-banner.png'
            "
                  fluid-grow
                  alt="方案页Banner图"></b-img>
            </b-col>
         </div>
         <!-- 具体方案 -->
         <div class="detail-wrapper">
            <div class="title-wrapper text-center"
               cols="12">
               <sup-title title="解决方案"></sup-title>
            </div>
            <div class="solution-wrapper"
               cols="12">
               <b-row>
                  <b-col cols="12"
                     class="sol-card-wrapper"
                     v-for="(item, idx) in solutionList"
                     :key="idx">
                     <div class="sol-card my-2 d-flex justify-content-center align-items-center">
                        <div class="fake-bg d-none d-lg-block d-xl-block"
                           :style="{
                    background: `center / cover no-repeat url('${item.bgSrc}')`,
                  }"></div>
                        <div class="sw-box">
                           <b-img class="title-src"
                              :src="item.titleSrc"></b-img>
                           <div class="list"
                              v-for="(v, index) in item.list"
                              :key="index">
                              <div class="title">{{ v.title }}</div>
                              <div class="sub-title">{{ v.subTitle }}</div>
                           </div>
                        </div>
                     </div>
                  </b-col>
               </b-row>
            </div>
         </div>
      </b-container>

      <!-- ========================= 我们的产品 START ========================= -->
      <our-products></our-products>
      <!-- ========================= 我们的产品 END ========================= -->

      <!-- ========================= 我们的客户 START ========================= -->
      <our-customer></our-customer>
      <!-- ========================= 我们的客户 END ========================= -->

      <!-- ========================= 联系我们 START ========================= -->
      <contact-us></contact-us>
      <!-- ========================= 联系我们 END ========================= -->
   </div>
</template>

<script>
import OurProducts from 'components/common/OurProducts'
import OurCustomer from 'components/common/OurCustomer'
import ContactUs from 'components/common/ContactUs'
export default {
   name: 'Project',
   components: {
      OurProducts,
      OurCustomer,
      ContactUs,
   },
   data () {
      return {
         solutionList: [{
            name: '资源的高效管理',
            titleSrc: this.$appConfig.picdomain +
               '/upload//20200819/09080383_01资源的高效管理.png',
            bgSrc: this.$appConfig.picdomain +
               '/upload//20200819/0927262726_01bg资源的高效管理.png',
            list: [{
               title: '提高预订效率',
               subTitle: '告别传统手写预定，优化预定流程;提高效率，避免出错，大幅度减少 工作量',
            },
            {
               title: '客户资源高效管理',
               subTitle: '随时随地轻松管理客户资料;自定义分配客户，资源价值最大化;客户资料云端存储，及时跟进减少流失',
            },
            {
               title: '订单信息多端同步',
               subTitle: '电脑预定，手机APP预定、客户小程序自助预定;包房，宴会，散台，订单信息同步管理',
            },
            ],
         },
         {
            name: '新客户获取',
            titleSrc: this.$appConfig.picdomain +
               '/upload//20200819/09090696_02新客户获取.png',
            bgSrc: this.$appConfig.picdomain +
               '/upload//20200819/0927472747_02bg新客户获取.png',
            list: [{
               title: '丰富的引流工具，告别传统获客方式',
               subTitle: '优惠券，会员卡，会员积分，秒杀活动，分销裂变，扩大销售渠道;多 种玩法应对各类场景',
            },
            {
               title: '对接三方平台，扩大引流渠道',
               subTitle: '线上各大平台对接引流多场景采集数据，快速积累客户',
            },
            {
               title: '轻松获客，预订即客户',
               subTitle: '预订即客户，客户资料自动生成快捷为新客户添加标签，方便跟踪',
            },
            ],
         },
         {
            name: '提升客户回头率',
            titleSrc: this.$appConfig.picdomain +
               '/upload//20200819/090941941_03提升客户回头率.png',
            bgSrc: this.$appConfig.picdomain +
               '/upload//20200819/092807287_03bg提升客户回头率.png',
            list: [{
               title: '客户自动分级，筛选高价值客户',
               subTitle: '智能算法，客户分级，精准跟踪;自动分配跟踪任务，简化销售操作,实 时查看客户发展路径，针对性跟踪',
            },
            {
               title: '多种跟踪工具，助力客户维护',
               subTitle: '短信，电话，微信;短信模板，群发短信让操作简单化;自动打标签，挖掘客户价值',
            },
            {
               title: '丰富的营销工具，促活客户',
               subTitle: '多种营销组合，实现客户拉新、留存、复购;团购券，折扣券，兑换券，会员卡、秒杀活动',
            },
            ],
         },
         {
            name: '独立的线上电商平台',
            titleSrc: this.$appConfig.picdomain +
               '/upload//20200819/091009109_04独立的线上电商平台.png',
            bgSrc: this.$appConfig.picdomain +
               '/upload//20200819/0928282828_04bg独立的线上电商平台.png',
            list: [{
               title: '自营平台，无平台抽成',
               subTitle: '自有外卖平台，无平台抽成；对接三方平台，提升配送力',
            },
            {
               title: '客户扫码下单，方便快捷',
               subTitle: '顾客微信扫码即可点单，方便快捷；顾客门店中心，整合个人权益，优惠活动，订单管理，门店推广',
            },
            {
               title: '多种营销工具，提高单量和单价',
               subTitle: '支持团购券，满减券，折扣券，兑换券；支持秒杀活动，支持分销体系；支持会员卡支付，积分抵现',
            },
            ],
         },
         {
            name: '营销传播效果监测',
            titleSrc: this.$appConfig.picdomain +
               '/upload//20200819/0910481048_05营销传播效果监测.png',
            bgSrc: this.$appConfig.picdomain +
               '/upload//20200819/0928442844_05bg营销传播效果监测.png',
            list: [{
               title: '营销路径实时监控',
               subTitle: '抖音运营数据监控，即时调整；营销活动转化率监控；运营人员营销执行监控',
            },
            {
               title: '营销结果分析，优化营销方案',
               subTitle: '实时监测传播情况，发现机会和瓶颈，动态调整；营销活动效果分析，营销成本分析；活动参与用户偏好分析，精准匹配目标群',
            },
            {
               title: '营销渠道分析，优化推广渠道',
               subTitle: '分析不同渠道的分析效果以及获客成本；针对性推广或优化营销渠道',
            },
            ],
         },
         {
            name: '标准化宴会服务',
            titleSrc: this.$appConfig.picdomain +
               '/upload//20200819/0911151115_06标准化宴会服务.png',
            bgSrc: this.$appConfig.picdomain +
               '/upload//20200819/092902292_06bg标准化宴会服务.png',
            list: [{
               title: '清晰高效的档期管理',
               subTitle: '清晰的宴会排班看板，实时了解资源档期；APP，电脑 ，TV多端同步展示，方便高效',
            },
            {
               title: '宴会线索智能管理',
               subTitle: '针对营销场景，智能获取宴会线索；智能分析客户消费情况，自动挖掘线索；实时完成线索跟进记录',
            },
            {
               title: '标准化宴会执行，服务流程高效统一',
               subTitle: '宴会信息集中管理，避免遗漏；宴会服务流程标准化，执行人员有序分配',
            },
            ],
         },
         {
            name: '经营数据分析',
            titleSrc: this.$appConfig.picdomain +
               '/upload//20200819/0911341134_07经营数据分析.png',
            bgSrc: this.$appConfig.picdomain +
               '/upload//20200819/0929172917_07bg经营数据分析.png',
            list: [{
               title: '经营数据分析，助力企业决策',
               subTitle: '经营指标多维度数据分析，为决策者提供依据；可视化报表，清晰明 了；自定义指标维度，应对不同分析需求',
            },
            {
               title: '客户数据分析',
               subTitle: '大数据分析深度了解客户画像，消费习惯，用餐偏好；分析客户增长，流失，实时分析客户发展路径',
            },
            {
               title: '业绩分析，管理有理有据',
               subTitle: '员工业绩数据分析，绩效管理有依据',
            },
            ],
         },
         ],
      }
   },
}
</script>

<style lang="scss" scoped>
.project {
   .sw-container {
      padding-top: 30px;
      padding-bottom: 40px;
      margin: 0 auto; // 去除 .col 自带的左右margin
   }

   .overview-wrapper {
      padding: 20px 0;

      .title-wrapper {
         padding: 10px 0 70px 0;
      }

      .img-wrapper {
         padding: 0 0 30px 0;
      }
   }

   .detail-wrapper {
      padding: 20px 0;

      .title-wrapper {
         padding: 10px 0 70px 0;
         margin: auto;
      }

      /* 具体方案 */
      .solution-wrapper {
         .sol-card-wrapper {
            &:nth-child(odd) {
               // 奇数在左
               .sol-card {
                  padding-left: 50%;

                  .fake-bg {
                     left: 0;
                  }
               }
            }

            &:nth-child(even) {
               // 偶数在右
               .sol-card {
                  padding-right: 50%;

                  .fake-bg {
                     right: 0;
                  }
               }
            }

            .sol-card {
               position: relative;

               .fake-bg {
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  width: 50%;
               }

               .sw-img {
                  width: 50%;
               }

               .sw-box {
                  box-sizing: border-box;
                  background: rgba(249, 249, 249, 1);
                  overflow: hidden;
                  padding: 30px;

                  .title-src {
                     height: 60px;
                     margin-bottom: 40px;
                  }

                  .list {
                     position: relative;
                     margin-bottom: 20px;

                     &:last-of-type {
                        margin-bottom: 0;
                     }

                     .title {
                        font-size: 16px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                        margin-bottom: 5px;
                     }

                     .sub-title {
                        font-size: 14px;
                        font-weight: 400;
                        color: rgba(153, 153, 153, 1);
                        line-height: 24px;
                     }

                     &::before {
                        position: absolute;
                        left: -10px;
                        top: 10px;
                        content: "";
                        width: 4px;
                        height: 4px;
                        background: rgba(51, 133, 255, 1);
                        border-radius: 50%;
                     }
                  }
               }
            }
         }
      }
   }
}

@media (max-width: 992px) {
   .solution-wrapper {
      .sol-card-wrapper {
         .sw-box {
            width: 100%;
         }

         &:nth-child(odd) {
            // 奇数在左
            .sol-card {
               padding-left: 0 !important;
            }
         }

         &:nth-child(even) {
            // 偶数在右
            .sol-card {
               padding-right: 0 !important;
            }
         }
      }
   }
}
</style>
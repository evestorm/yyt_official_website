<template>
   <div class="custoemr">
      <!-- ========================= hero START ========================= -->
      <div class="customer-title bg-white">
         <b-container class="sw-conttainer">
            <b-row class="title-wrapper"
               align-h="center">
               <b-col class="text-center d-flex flex-column align-items-center mt-4 mb-5">
                  <h1 class="sw-h1 res-h1">智能预定系统</h1>
               </b-col>
            </b-row>
            <b-row align-h="center"
               class="center-banner bg-white text-center">
               <b-col md="12"
                  lg="7"
                  class="">
                  <b-img class="sw-img"
                     fluid-grow
                     :src="$appConfig.picdomain + '/upload//20200827/1336483648_mac_phone.png'">
                  </b-img>
               </b-col>
               <b-col md="12"
                  lg="5">
                  <div class="pt-4 d-block d-lg-none d-xl-none"></div>
                  <div class="box d-flex flex-column justify-content-center align-items-center">
                     <ul class="nav flex-column text-left">
                        <li class="nav-item">
                           <a class="nav-link text-dark"
                              href="javascript:void(0)">减轻预定工作量，告别手写预定时代</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link text-dark"
                              href="javascript:void(0)">预订及客户，轻松获取客户</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link text-dark"
                              href="javascript:void(0)">订单数据云端存储，高效管理</a>
                        </li>
                     </ul>
                  </div>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <!-- ========================= hero END ========================= -->

      <!-- ========================= feature START ========================= -->
      <div class="feature-wrapper">
         <b-container class="sw-container">
            <card-list class="card-wrapper"
               :cardList="cardList"></card-list>
         </b-container>
      </div>
      <!-- ========================= feature END ========================= -->

      <!-- ========================= 联系我们 START ========================= -->
      <contact-us></contact-us>
      <!-- ========================= 联系我们 END ========================= -->
   </div>
</template>

<script>
import ContactUs from 'components/common/ContactUs';

export default {
   name: 'reserve',
   data () {
      return {
         cardList: [{
            icon: 'icon-chanpin01-PCduanyidongduanduoshebeishujutongbu',
            desc: 'PC端、移动端多设备数据同步',
         }, {
            icon: 'icon-chanpin01-huantaibingtaifantaisuotaimanzuyewuxuqiu',
            desc: '换台、并台、翻台、锁台满足业务需求',
         }, {
            icon: 'icon-chanpin01-laidianzhanshigongneng',
            desc: '来电展示功能，显示客户消费记 录，跟踪记录，通过记录',
         }, {
            icon: 'icon-chanpin01-fangzhuangdansheji',
            desc: '防撞单设计，避免预订错误',
         }, {
            icon: 'icon-chanpin01-duanxinzidongtuisong',
            desc: '短信自动推送服务，提高客户满意度',
         }, {
            icon: 'icon-chanpin01-jingyingshujutongjifenxi',
            desc: '经营数据统计分析，数据驱动提高销',
         },]
      }
   },
   components: {
      ContactUs,
   },
}
</script>

<style lang="scss" scoped>
.customer-title {
   position: relative;

   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 65%;
      background: center / cover no-repeat
         url("https://pic.cwyyt.cn//upload//20200827/1327152715_智能预定系统.png");
   }

   .sw-conttainer {
      padding-bottom: 120px;

      @media (min-width: $sw-xs) {
         padding-bottom: 40px;
      }

      @media (min-width: $sw-sm) {
         padding-bottom: 60px;
      }

      @media (min-width: $sw-md) {
         padding-bottom: 80px;
      }

      @media (min-width: $sw-lg) {
         padding-bottom: 100px;
      }

      @media (min-width: $sw-xl) {
         padding-bottom: 120px;
      }

      position: relative;
      z-index: 1;

      .title-wrapper {
         padding-top: 160px;

         @media (min-width: $sw-xs) {
            padding-top: 80px;
         }

         @media (min-width: $sw-sm) {
            padding-top: 100px;
         }

         @media (min-width: $sw-md) {
            padding-top: 120px;
         }

         @media (min-width: $sw-lg) {
            padding-top: 140px;
         }

         @media (min-width: $sw-xl) {
            padding-top: 160px;
         }

         .sw-h1 {
            // font-size: 70px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 80px;
            text-shadow: 0px 7px 6px rgba(0, 0, 0, 0.33);
         }
      }

      .center-banner {
         background: rgba(255, 255, 255, 1);
         box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.06);
         padding: 80px;

         @media (min-width: $sw-xs) {
            padding: 20px;
         }

         @media (min-width: $sw-sm) {
            padding: 40px;
         }

         @media (min-width: $sw-md) {
            padding: 60px;
         }

         @media (min-width: $sw-lg) {
            padding: 80px;
         }

         @media (min-width: $sw-xl) {
            padding: 110px;
         }

         margin-top: 160px;

         @media (min-width: $sw-xs) {
            margin-top: 80px;
         }

         @media (min-width: $sw-sm) {
            margin-top: 100px;
         }

         @media (min-width: $sw-md) {
            margin-top: 120px;
         }

         @media (min-width: $sw-lg) {
            margin-top: 140px;
         }

         @media (min-width: $sw-xl) {
            margin-top: 160px;
         }

         .box {
            height: 100%;

            .nav {
               position: relative;
               padding-top: 30px;

               &::before {
                  position: absolute;
                  content: "";
                  left: 0;
                  top: 0;
                  width: 50px;
                  height: 6px;
                  background: $primary;
               }

               .nav-item {
                  padding-left: 6px;
                  position: relative;

                  &::before {
                     position: absolute;
                     content: "";
                     background: $primary;
                     width: 6px;
                     height: 6px;
                     border-radius: 50%;
                     top: 50%;
                     left: 0;
                     transform: translateY(-50%);
                  }
               }
            }
         }
      }
   }
}

.feature-wrapper {
   padding: 110px 0;

   @media (min-width: $sw-xs) {
      padding: 40px 0;
   }

   @media (min-width: $sw-sm) {
      padding: 60px 0;
   }

   @media (min-width: $sw-md) {
      padding: 70px 0;
   }

   @media (min-width: $sw-lg) {
      padding: 90px 0;
   }

   @media (min-width: $sw-xl) {
      padding: 110px 0;
   }

   background: center / cover no-repeat
      url("https://pic.cwyyt.cn//upload//20200827/1436373637_customer-feature.png");
}
</style>
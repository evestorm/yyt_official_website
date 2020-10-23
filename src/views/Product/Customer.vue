<template>
   <div class="customer">
      <!-- hero img -->
      <div class="hero-wrapper position-relative">
         <b-img fluid-grow
            alt="客户管理系统"
            :src="
          $appConfig.picdomain + '/upload//20200822/1430203020_客户管理系统.png'
        "></b-img>
         <h1 class="res-h1 position-absolute hero-title text-break text-center">
            客户管理系统
         </h1>
      </div>
      <b-container class="sw-container">
         <!-- 卡片群 -->
         <card-list class="card-wrapper"
            :cardList="card1"
            :titleObj="card1TitleInfo"></card-list>
         <card-list class="card-wrapper"
            :cardList="card2"
            :titleObj="card2TitleInfo"></card-list>
      </b-container>
      <!-- ========================= 产品截图 START ========================= -->
      <div class="section screenshots1">
         <b-row cols="12">
            <sup-title title="数据驱动，分析客户价值"
               :light="true"></sup-title>
         </b-row>
         <b-container class="section-main">
            <b-row>
               <b-col class="mb-3"
                  cols="12"
                  md="6">
                  <div class="box d-flex flex-column align-items-center justify-content-center">
                     <b-img class="img"
                        :src="
                  $appConfig.picdomain +
                    '/upload//20200822/1729282928_客户详情-消费记录.png'
                ">
                     </b-img>
                     <p class="desc text-center">轻松查看客户跟踪消费记录</p>
                  </div>
               </b-col>
               <b-col class="mb-3"
                  cols="12"
                  md="6">
                  <div class="box d-flex flex-column align-items-center justify-content-center">
                     <b-img fluid-grow
                        class="img"
                        :src="
                  $appConfig.picdomain +
                    '/upload//20200822/1730123012_月统计.png'
                ">
                     </b-img>
                     <p class="desc text-center">月统计，便于了解门店经营情况</p>
                  </div>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <div class="section screenshots2">
         <b-row cols="12">
            <sup-title title="目标管理体系，助力客户管理"></sup-title>
         </b-row>
         <b-container class="section-main">
            <b-row>
               <b-col class="my-3"
                  cols="12"
                  md="12"
                  lg="6">
                  <div class="box d-flex flex-column align-items-center justify-content-center">
                     <b-img class="img"
                        :src="
                  $appConfig.picdomain +
                    '/upload//20200822/1747294729_流程图.png'
                ">
                     </b-img>
                     <p style="width: 50%;"
                        class="desc text-center">
                        完善的目标设定机制，激励员工，提高销
                        量，可查看门店和个人的目标完成情况
                     </p>
                  </div>
               </b-col>
               <b-col class="my-3"
                  cols="12"
                  md="6"
                  lg="3">
                  <div class="box d-flex flex-column align-items-center justify-content-center">
                     <b-img fluid-grow
                        class="img"
                        :src="
                  $appConfig.picdomain +
                    '/upload//20200822/1748584858_目标完成.png'
                ">
                     </b-img>
                     <p class="desc text-center">全店目标完成情况</p>
                  </div>
               </b-col>
               <b-col class="my-3"
                  cols="12"
                  md="6"
                  lg="3">
                  <div class="box d-flex flex-column align-items-center justify-content-center">
                     <b-img fluid-grow
                        class="img"
                        :src="
                  $appConfig.picdomain +
                    '/upload//20200822/1749164916_个人完成.png'
                ">
                     </b-img>
                     <p class="desc text-center">个人目标完成情况</p>
                  </div>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <!-- ========================= 产品截图 END ========================= -->
      <!-- ========================= 联系我们 START ========================= -->
      <contact-us></contact-us>
      <!-- ========================= 联系我们 END ========================= -->
   </div>
</template>

<script>
import ContactUs from 'components/common/ContactUs'

export default {
   name: 'customer',
   components: {
      ContactUs,
   },
   data () {
      return {
         showSelf: 1,
         cardList: [
            {
               icon: 'icon-chanpin02-kehuzhinengfenji',
               title: '客户智能分级',
               desc: '根据消费频次，消费金额，消费时间自动将客户分级',
            },
            {
               icon: 'icon-chanpin02-genzongkehuzidongtuisong',
               title: '跟踪客户自动推送',
               desc: '自动推送需要跟踪的客户',
            },
            {
               icon: 'icon-chanpin02-zhinengkehubiaoqian',
               title: '智能客户标签',
               desc: '满足标签条件客户自动打上标签，精准跟踪',
            },
            {
               icon: 'icon-chanpin02-qunfaduanxingongju',
               title: '群发短信工具，告别重复编辑',
               desc: '一键预览，防错机制，避免短信错误',
            },
            {
               icon: 'icon-chanpin02-zidingyiduozhongduanxinmoban',
               title: '自定义多种短信模版，提高跟踪效率',
               desc: '预订短信模版，跟踪短信模版',
            },
            {
               icon: 'icon-chanpin02-duijieshoujitongxunlu',
               title: '对接手机通讯录，客户跟踪不流失',
               desc: 'app直接查看手机客户，避免遗漏',
            },
         ],
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
   & /deep/ .row {
      margin-left: 0;
      margin-right: 0;
   }

   .card-wrapper {
      .row {
         margin: 0;
      }

      // margin: 30px 0;
   }
}

.screenshots1 /deep/ .row {
   margin-left: 0;
   margin-right: 0;
}
.screenshots2 /deep/ .row {
   margin-left: 0;
   margin-right: 0;
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
      color: #666 !important;
      text-shadow: none;
   }
}
</style>

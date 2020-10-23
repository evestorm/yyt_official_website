<template>
   <div class="solution my-5">
      <b-container>
         <b-row class="data mb-5"
            cols="2"
            cols-sm="4"
            cols-md="4"
            cols-lg="4">
            <b-col class="my-2"
               v-for="(item, idx) in iconArr"
               :key="idx">
               <div class="d-flex justify-content-center">
                  <icon-svg class="icon"
                     :icon-class="item.icon" />
                  <div class="right d-flex flex-column justify-content-center">
                     <span class="font-col-33">{{ item.num }}</span>
                     <span class="font-col-66">{{ item.name }}</span>
                  </div>
               </div>
            </b-col>
         </b-row>
         <!-- xl 1200px+布局 -->
         <b-row class="grid-wrapper text-center d-none d-xl-flex justify-content-between">
            <div class="box p-3 d-flex justify-content-center align-items-end"
               :style="{
            background: `center / cover no-repeat url('${gridArr[0].src}')`,
          }">
               {{ gridArr[0].name }}
            </div>
            <div style="width: 670px"
               class="box-top-center mt-2 d-flex flex-column justify-content-start align-items-center">
               <h3>解决方案</h3>
               <p>
                  云于天专注于通过互联网+大数据服务，帮助餐饮企业在获客、营销、客户管理、宴会服务、经营决策等方面提升智能化管理能力，助力企业实现数字化升级，让企业的营销管理更加高效、科学、智能。
               </p>
               <b-button :to="{ name: 'project' }"
                  class="px-5"
                  variant="primary">查看详情</b-button>
            </div>
            <div class="box p-3 d-flex justify-content-center align-items-end"
               :style="{
            background: `center / cover no-repeat url('${gridArr[1].src}')`,
          }">
               {{ gridArr[1].name }}
            </div>
            <div v-for="item in gridArr.slice(2)"
               :key="item.order"
               class="box p-3 d-flex justify-content-center align-items-end"
               :style="{ background: `center / cover no-repeat url('${item.src}')` }">
               {{ item.name }}
            </div>
         </b-row>
         <!-- md 768px+布局 -->
         <b-row class="grid-wrapper text-center d-xs-flex d-sm-flex d-md-flex d-lg-flex d-xl-none justify-content-between">
            <div class="mx-4 box-top-center mt-2 d-flex flex-column justify-content-start align-items-center"
               style="width:100%;">
               <h3>解决方案</h3>
               <p>
                  云于天专注于通过互联网+大数据服务，帮助餐饮企业在获客、营销、客户管理、宴会服务、经营决策等方面提升智能化管理能力，助力企业实现数字化升级，让企业的营销管理更加高效、科学、智能。
               </p>
               <b-button class="px-5"
                  variant="primary">查看详情</b-button>
            </div>
            <b-col class="d-flex justify-content-center align-items-center"
               xs="12"
               sm="6"
               md="4"
               lg="4"
               v-for="item in gridArr"
               :key="item.order">
               <div class="box p-3 d-flex justify-content-center align-items-end"
                  :style="{
              background: `center / cover no-repeat url('${item.src}')`,
            }">
                  {{ item.name }}
               </div>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
export default {
   name: 'solution',
   data () {
      return {
         iconArr: [
            {
               icon: 'icon-guanwangshouye-xiaoliangtisheng',
               name: '销量提升',
               num: '30%',
            },
            {
               icon: 'icon-guanwangshouye-xiaoshuaitigao',
               name: '效率提升',
               num: '50%',
            },
            {
               icon: 'icon-guanwangshouye-chengbenjianshao',
               name: '成本减少',
               num: '30%',
            },
            {
               icon: 'icon-guanwangshouye-kehumanyidu',
               name: '客户满意度',
               num: '90%',
            },
         ],
         gridArr: [
            {
               src:
                  this.$appConfig.picdomain +
                  '/upload//20200817/1651205120_资源高效管理.png',
               name: '资源高效管理',
               order: 1,
            },
            {
               src:
                  this.$appConfig.picdomain +
                  '/upload//20200817/1651395139_营销传播效果监测.png',
               name: '营销传播效果监测',
               order: 3,
            },
            {
               src:
                  this.$appConfig.picdomain +
                  '/upload//20200817/1651545154_自营电商.png',
               name: '自营电商',
               order: 4,
            },
            {
               src:
                  this.$appConfig.picdomain +
                  '/upload//20200817/165209529_新客户获取.png',
               name: '新客户获取',
               order: 5,
            },
            {
               src:
                  this.$appConfig.picdomain +
                  '/upload//20200817/1647124712_宴会服务.png',
               name: '宴会服务',
               order: 6,
            },
            {
               src:
                  this.$appConfig.picdomain +
                  '/upload//20200817/1652285228_提升客户回头率.png',
               name: '提升客户回头率',
               order: 7,
            },
            {
               src:
                  this.$appConfig.picdomain +
                  '/upload//20200817/1652425242_经营数据分析.png',
               name: '经营数据分析',
               order: 8,
            },
         ],
      }
   },
}
</script>

<style lang="scss" scoped>
/* 解决方案 */
.solution {
   .icon {
      font-size: 55px;
      margin-right: 10px;
   }

   .data {
      span {
         font-size: 14px;
         font-weight: 500;
         color: #666;

         &:first-of-type {
            font-size: 18px;
            color: #333;
         }
      }
   }

   .grid-wrapper {
      .box-top-center {
         h3 {
            position: relative;
            font-size: 36px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            &:after {
               position: absolute;
               content: "";
               left: 50%;
               bottom: -10px;
               width: 30px;
               transform: translateX(-50%);
               height: 3px;
               background-color: #3086ff;
            }
         }
         p {
            margin-top: 30px;
            width: 100%;
            color: #555;
         }
      }

      .box {
         width: 200px;
         height: 200px;
         margin: 20px 0;

         font-size: 18px;
         font-weight: 500;
         color: rgba(255, 255, 255, 1);
         text-shadow: 0px 7px 24px rgba(0, 0, 0, 0.2);
      }
   }
}
</style>

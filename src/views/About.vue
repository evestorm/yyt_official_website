<template>
   <div class="about">
      <div class="position-relative">
         <b-img fluid-grow
            :src="$appConfig.picdomain + '/upload//20200827/134804484_about1.png'"></b-img>
         <div class="top-bander d-flex align-content position-absolute text-break text-center">
            <h1 class="res-h1">合作</h1>
            <h1 class="res-h1">创新</h1>
            <h1 class="res-h1">共赢</h1>
         </div>
         <b-container class="">
            <b-row align-h="center"
               class="">
               <b-col md="8"
                  class="d-none d-lg-flex position-absolute absolute-sit bander-sec">
                  <div>
                     <sup-title title="简介"></sup-title>
                     <p>
                        云于天隶属于武汉策微信息科技有限公司，专注于通过互联网+大数据让您的营销管理更智能。
                     </p>
                     <p>
                        公司利用自身技术研发优势，结合中高端餐饮行业的市场现状及管理痛点，自主研发了云于天智能数据管理服务平台，主要为餐饮企业解决客户管理、销售管理、客户跟踪、营销管理、目标管理的数据智能化运营管理系统；给酒店的互联网及数据化管理转型增添竞争优势，搭建商户与消费者之间的桥梁，帮助商户优化客户群，提高经营效率，创造核心竞争力。
                     </p>
                  </div>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <b-container>
         <b-row align-h="center">
            <b-col sm="10"
               xs="12"
               class="d-lg-none d-xs-flex d-sm-flex d-md-flex bander-sec">
               <div>
                  <sup-title title="简介"></sup-title>
                  <p>
                     云于天隶属于武汉策微信息科技有限公司，专注于通过互联网+大数据让您的营销管理更智能。
                  </p>
                  <p>
                     公司利用自身技术研发优势，结合中高端餐饮行业的市场现状及管理痛点，自主研发了云于天智能数据管理服务平台，主要为餐饮企业解决客户管理、销售管理、客户跟踪、营销管理、目标管理的数据智能化运营管理系统；给酒店的互联网及数据化管理转型增添竞争优势，搭建商户与消费者之间的桥梁，帮助商户优化客户群，提高经营效率，创造核心竞争力。
                  </p>
               </div>
            </b-col>
         </b-row>
      </b-container>
      <!-- 相关资质 -->
      <div class="d-none d-lg-block empty-div"></div>
      <div class="qualification">
         <sup-title title="相关资质"></sup-title>
         <b-row align-h="center">
            <b-col sm="12"
               md="8">
               <b-img fluid-grow
                  :src="
              $appConfig.picdomain + '/upload//20200827/1444114411_about2.png'
            "></b-img>
            </b-col>
         </b-row>
      </div>
      <!-- 联系我们 -->
      <div class="call-us"
         style="padding-top:60pxm">
         <sup-title title="联系我们"></sup-title>
         <b-container>
            <b-row sm="8"
               md="8"
               class="call-me">
               <b-col class="call-item"
                  sm="6"
                  md="6"
                  v-for="(item, index) in callMe"
                  :key="index">
                  <a :href="item.aHerf">
                     <icon-svg class="icon"
                        :icon-class="item.icon" />
                     <p>{{ item.desc }}</p>
                  </a>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <!-- 公司地址 -->
      <div style="padding:60px 0;">
         <sup-title title="公司地址"
            :subTitle="'湖北省武汉市武大园一路武大科技园创业楼'"></sup-title>
         <b-container>
            <b-row sm="12"
               md="8">
               <b-col style="margin-top:20px;">
                  <div class="amap-demo"
                     id="container"></div>
               </b-col>
            </b-row>
         </b-container>
      </div>
   </div>
</template>
<script>
import AMap from 'AMap'
import supTitle from 'components/common/supTitle'
export default {
   name: 'About',
   data () {
      return {
         callMe: [
            {
               icon: 'icon-guanyuwomen-dianhua',
               desc: '电话：027-87607295',
               aHerf: 'tel:027-87607295',
            },
            {
               icon: 'icon-guanyuwomen-youxiang',
               desc: '邮箱：whcewei@whcewei.com',
               aHerf: 'mailto:027-87607295',
            },
         ],
      }
   },
   mounted () {
      this.initMap()
   },
   methods: {
      initMap () {
         let map = new AMap.Map('container', {
            center: [114.41062, 30.45737],
            resizeEnable: true,
            zoom: 15,
         })
         let marker = new AMap.Marker({
            // icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
            position: [114.41062, 30.45737],
            offset: new AMap.Pixel(-13, -30),
         })
         marker.setMap(map)
      },
   },
}
</script>

<style scoped lang="scss">
.about {
   text-align: center;
}
.top-bander {
   top: 35%;
   left: 50%;
   transform: translate(-50%, -50%);
   white-space: nowrap;
   h1 {
      color: #fff;
      display: flex;
      align-items: center;
      &:after {
         content: "";
         display: block;
         width: 8px;
         height: 8px;
         background: #fff;
         margin: 0 28px;
         border-radius: 50%;
      }
      &:last-child::after {
         display: none;
      }
   }
}
.absolute-sit {
   background: #fff;
   bottom: 0;
   left: 50%;
   transform: translate(-50%, 50%);
}
.bander-sec {
   padding: 12px 24px 48px;
   p {
      font-size: 14px;
      color: #666;
      line-height: 28px;
      margin-bottom: 0;
   }
}
.empty-div {
   width: 100%;
   height: 128px;
   background: #f7f7f7;
}
// 相关资质
.qualification {
   padding: 40px 0;
   background: #f7f7f7;
}
// 联系我们
.call-me {
   background: #f7f7f7;
   padding: 50px 0;
   .call-item {
      padding: 16px;
      p {
         color: #656565;
         font-size: 16px;
         line-height: 1;
         margin: 14px 0;
      }
      &:first-child {
         border-right: 1px solid #e6e6e6;
      }
   }
}
.amap-demo {
   height: 500px;
}
.row {
   margin: 0 !important;
}
@media (max-width: 575px) {
   .call-me {
      .call-item:first-child {
         border-right: 0 !important;
         border-bottom: 1px solid #e6e6e6;
      }
   }
}
.call-us {
   /deep/.sup-title {
      margin: 80px 0 60px 0;
   }
}
</style>

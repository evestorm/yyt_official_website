<template>
   <div class="footer-bottom">
      <b-container fluid="lg" class="pt-5">
         <!-- 地址+二维码 -->
         <b-row class="justify-content-between">
            <b-col sm="12" md="auto">
               <ul class="nav flex-column">
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="#">地址：湖北省武汉市武大园一路武大科技园创业楼</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="tel:02787607295">电话：027-87607295</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="mailto:whcewei@whcewei.com">邮箱：whcewei@whcewei.com</a>
                  </li>
               </ul>
            </b-col>
            <b-col sm="12" md="2">
               <div class="qr-code-wrapper d-flex flex-column align-items-center justify-content-center">
                  <img :src="$appConfig.picdomain + '/upload/20200901/165703573_gzh-qrcode.png'" class="qr-code  mb-3" alt="二维码">
                  <div>扫码了解更多</div>
               </div>
            </b-col>
         </b-row>
         <!-- 分隔线 -->
         <b-row align-h="center" class="mt-5 mb-4">
            <b-col class="divider"></b-col>
         </b-row>
         <!-- 网监+版权 -->
         <b-row class="text-center">
            <b-col class="internet-surveillance text-center">
               <b-link
                  href="http://wljg.scjgj.wuhan.gov.cn:80/whwjww/indexquery/indexqueryAction!dizview.dhtml?chr_id=1899029fc7c506185c4a370d1085e655&amp;bus_ent_id=442010000000620075&amp;bus_ent_chr_id=d832388a4c0a40f18db0a987b631a387"
                  target="_blank">
                  <img src="http://wljg.scjgj.wuhan.gov.cn:80/whwjww/images/govIcon.gif" width="50" height="50"
                     title="武汉网监电子标识" alt="武汉网监电子标识" border="0">
               </b-link>
               <p class="copyright">Copyright © 2018</p>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
   export default {
      name: 'FooterBottom'
   }
</script>

<style lang="scss" scoped>
   .footer-bottom {
      background: #F3F3F3;

      .qr-code-wrapper {
         .qr-code {
            width: 110px;
            height: 110px;
         }
      }

      .divider {
         height: 1px;
         background: rgba(225, 225, 225, 1);
         transform: scaleX(0.9);
      }
   }
</style>
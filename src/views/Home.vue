<template>
   <div class="home">
      <!-- ========================= Banner START ========================= -->
      <b-img :src="$appConfig.picdomain + '/upload/20200817/1455575557_homepage-banner.png'"
         fluid-grow
         alt="首页Banner图">
      </b-img>
      <!-- ========================= Banner END ========================= -->

      <!-- ========================= 解决方案 START ========================= -->
      <solution></solution>
      <!-- ========================= 解决方案 END ========================= -->

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
// 组件
import Solution from 'views/Home/Solution';
import OurProducts from 'components/common/OurProducts';
import OurCustomer from 'components/common/OurCustomer';
import ContactUs from 'components/common/ContactUs';
// 接口
import DemoStudentTe from '@/service/Demo/DemoStudentTeAppService.js';

export default {
   name: 'Home',
   components: {
      Solution,
      OurProducts,
      OurCustomer,
      ContactUs,
   },
   data () {
      return {
      }
    },
    mounted() {
    },
    methods: {

   }
}
</script>

<style lang="scss" scoped>
</style>
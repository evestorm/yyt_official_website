<template>
   <div class="contact-us bg-white">
      <b-container class="sw-conttainer">
         <b-row class="title-wrapper"
            align-h="center">
            <b-col class="text-center d-flex flex-column align-items-center mt-4 mb-5">
               <sup-title title="联系我们"
                  :light="true"></sup-title>
            </b-col>
         </b-row>
         <b-row align-h="center"
            class="sw-form-wrapper bg-white text-center">
            <sw-form class="sw-form"
               :model="form"
               :rules="rules"
               ref="contactUs">
               <b-row>
                  <b-col md="4"
                     class="sw-col">
                     <sw-form-item prop="companyName">
                        <sw-input id="company-name"
                           v-model="form.companyName"
                           autocomplete="off"
                           placeholder="企业名称">
                        </sw-input>
                     </sw-form-item>
                  </b-col>
                  <b-col md="4"
                     class="sw-col">
                     <sw-form-item prop="fullName">
                        <sw-input id="full-name"
                           v-model="form.fullName"
                           placeholder="真实姓名"></sw-input>
                     </sw-form-item>
                  </b-col>
                  <b-col md="4"
                     class="sw-col">
                     <sw-form-item prop="contact">
                        <sw-input id="contact"
                           v-model="form.contact"
                           placeholder="联系方式"></sw-input>
                     </sw-form-item>
                  </b-col>
               </b-row>
               <b-row>
                  <b-col class="sw-col">
                     <sw-form-item prop="content">
                        <sw-input type="textarea"
                           id="content"
                           v-model="form.content"
                           placeholder="咨询内容"
                           rows="6"
                           max-rows="10"></sw-input>
                     </sw-form-item>
                  </b-col>
               </b-row>
               <b-button class="submit py-2"
                  type="submit"
                  variant="primary"
                  @click="onSubmit('contactUs')">提交
               </b-button>
            </sw-form>
         </b-row>
      </b-container>
   </div>
</template>

<script>
import DemoStudentTe from '@/service/Demo/DemoStudentTeAppService.js';
import YYPSiteContract from '@/service/YYPSiteContract';

export default {
   name: "contact-us",
   data () {
      return {
         form: {
            companyName: '', // 企业名称
            fullName: '', // 真实姓名
            contact: '', // 联系方式
            content: '', // 咨询内容
         },
         rules: {
            companyName: [{
               type: 'string',
               required: true,
               // len: 3,
               message: '请填写企业名称',
            }],
            fullName: [{
               type: 'string',
               required: true,
               message: '请填写真实姓名',
            }],
            contact: [{
               type: 'string',
               // (/^[0]\d{2}([-]?)\d{8}$|^[0]\d{3}([-]?)\d{7,8}$/).test(mobile) || RegExp(/^1[1234576890]\d{9}$/)
               pattern: /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/,
               required: true,
               message: '请填写正确的手机号码',
               transform (value) {
                  return value.trim();
               },
            }],
            content: [{
               type: 'string',
               required: true,
               message: '请填写咨询内容',
            }]
         }
      }
   },
   methods: {
      // 提交
      onSubmit (form) {
         this.$refs[form].validate(async valid => {
            if (valid) {
               // alert(JSON.stringify(this.form));
               let {
                  companyName,
                  fullName: realUserName,
                  contact: contractTel,
                  content: contractRemark
               } = this.form
               await YYPSiteContract.CreateByDto({
                  companyName,
                  realUserName,
                  contractTel,
                  contractRemark
               });
            } else {
               this.$toasted.show("请核实您的信息", {
                  icon: {
                     name: "fa fa-exclamation", // icon见main.js
                  },
                  type: "error",
               });
            }
         });
      },
   },
}
</script>

<style lang="scss" scoped>
.contact-us {
   position: relative;
   margin-bottom: 80px;

   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 65%;
      background: center / cover no-repeat
         url("https://pic.cwyyt.cn/upload/20200816/210054054_yyt-website-contact-us-bg.png");
   }

   .sw-conttainer {
      position: relative;
      z-index: 1;

      .title-wrapper {
         padding: 30px 0;
      }

      .title {
         position: relative;
         font-size: 34px;
         font-weight: 500;
         color: rgba(255, 255, 255, 1);
      }

      .divider {
         width: 30px;
         height: 3px;
         background: rgba(255, 255, 255, 1);
      }
   }

   .sw-form-wrapper {
      padding: 50px;
      // margin-top: 122px;
      box-shadow: 0 1px 20px 0 rgba(46, 61, 73, 0.2);
      border-radius: 4px;

      .sw-form {
         width: 100%;

         .sw-col {
            margin: 0 0 30px 0;
         }

         .submit {
            width: 100%;
         }
      }
   }
}
</style>
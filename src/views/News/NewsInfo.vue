<template>
   <div class="page">
      <b-container>
         <b-row>
            <b-col class="crumb d-flex align-items-center">
               <span>当前位置：</span>
               <span>
                  <b-link href="#"
                     to="../News">{{page.siteArticleType==10?'案例':'资讯'}}</b-link>
               </span>
               <span>></span>
               <span>正文</span>
            </b-col>
         </b-row>
      </b-container>
      <b-container>
         <h2 class="text-center">{{page.siteArticleTitle}}</h2>
         <p class="text-center"
            style="color:#666;margin: 15px 0 35px;">{{page.createTime}}</p>
         <div v-html="page.siteArticleContent"> {{page.siteArticleContent}} </div>
         <!-- <iframe
        src="https://cn.vuejs.org/"
        id="mobsf"
        scrolling="no"
        frameborder="0"
        style=""
      ></iframe> -->
      </b-container>
   </div>
</template>

<script type="text/ecmascript-6">
import YYPSiteArticle from '@/service/YYPSiteArticle/index.js';

export default {
   data () {
      return {
         page: {
            siteArticleType: "",//文章类型(10,客户案列;20,行业资讯)
            siteArticleTitle: "",//文章的标题
            articleMainImgUrl: "",//文章主图地址(上传图片)
            siteArticleShortContent: "",//文章内容简写
            siteArticleContent: "",//文章内容(标签)
            createTime: "",//创建时间
            buUnitGUID: "",//公司GUID
         },
         items: [{
            text: '资讯',
            href: '#'
         },
         {
            text: '正文',
            href: '#'
         },]
      }
   },
   created () {
      let id = this.$route.query.id
      this.getViewDto(id);
   },
   methods: {
      async getViewDto (id) {
         let data = {
            id: id
         }
         let res = await YYPSiteArticle.GetViewDto(data);
         this.page.siteArticleType = res.siteArticleType;//文章类型(10,客户案列;20,行业资讯)
         this.page.articleMainImgUrl = res.articleMainImgUrl;//文章主图地址(上传图片)
         this.page.createTime = res.createTime;//创建时间
         this.page.siteArticleContent = res.siteArticleContent;
         this.page.siteArticleTitle = res.siteArticleTitle;
      }
   },
   watch: {},
}
</script>

<style scoped lang="scss">
/* @import url(); 引入公共css类 */
.crumb {
   margin: 30px 0;
   span {
      font-size: 18px;
      color: #b2b2b2;
      margin: 0 8px;
      &:nth-child(2)::hover {
         color: #3385ff !important;
      }
      &:last-child {
         color: #333;
      }
   }
   a {
      color: #b2b2b2;
      &:hover {
         color: #3385ff !important;
         text-decoration: none;
      }
   }
}
</style>

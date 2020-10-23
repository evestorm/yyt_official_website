<template>
   <div class="news">
      <b-container>
         <b-row sm="3">
            <b-col sm="12"
               md="3"
               class="">
               <div class="left-nav">
                  <p v-for="(item, indexNav) in navArr"
                     :key="indexNav"
                     :class="navSelect == item.id ? 'active' : ''"
                     @click="navSelect = item.id">
                     {{ item.nav }}
                  </p>
               </div>
            </b-col>
            <b-col sm="12"
               md="9"
               class="">
               <div class="right-list">
                  <div id="news-list"
                     class="right-list-item"
                     v-for="(item, index) in newsList"
                     :key="index">
                     <b-link href="#"
                        :to="'./NewsInfo?id='+item.id">
                        <b-row>
                           <b-col class="col-4 item-img"
                              :style="{
                      background: `center / cover no-repeat url('${item.articleMainImgUrl}')`,
                    }">
                           </b-col>
                           <b-col class="col-8">
                              <div class="item-title">{{ item.siteArticleTitle }}</div>
                              <div class="item-sec">
                                 {{item.siteArticleShortContent}}
                              </div>
                              <div class="item-time">{{ item.createTime }}</div>
                           </b-col>
                        </b-row>
                     </b-link>
                  </div>
                  <div style="text-align:center;color:#999;"
                     v-show="newsList.length == 0">
                     暂无内容
                  </div>
                  <!-- 分页 -->
                  <b-row v-show="(page.rows/page.perPage)>1"
                     class="news-pagination justify-content-center">
                     <b-pagination v-model="page.currentPage"
                        :total-rows="page.rows"
                        :per-page="page.perPage"
                        aria-controls="news-list"></b-pagination>
                  </b-row>
               </div>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
import YYPSiteArticle from '@/service/YYPSiteArticle/index.js';
const PAGESIZE = 10;
export default {
   name: 'News',
   data () {
      return {
         navSelect: '10', //左侧选中的目录
         navArr: [
            {
               nav: '客户案例',
               select: false,
               id: '10',
            },
            {
               nav: '行业资讯',
               select: true,
               id: '20',
            },
         ],
         getNewList: [],//接口获取的列表
         page: {
            //分页数据相关
            currentPage: 1, //选中第几页
            rows: 1, //总条数
            perPage: PAGESIZE,//每页显示多少条
         },
      }
   },
   created () {
      this.getSiteArticleInformation(1, this.navSelect);
   },
   computed: {
      newsList () {//展示新闻列表
         return this.getNewList;
      },
   },
   methods: {
      async getSiteArticleInformation (pageIndex, type) {//获取文章列表信息
         let data = {
            siteArticleType: this.navSelect,//10,客户案列;20,行业资讯
            pageIndex: pageIndex,
            pageSize: PAGESIZE,
         }
         let res = await YYPSiteArticle.GetSiteArticleInformation(data);
         if (res.articepageResult) {
            this.getNewList = res.articepageResult.dataList;
            this.page.rows = res.articepageResult.rowCount; //总页数
         }
      }
   },
   watch: {
      navSelect: {//10,客户案列;20,行业资讯
         handler (val, old) {
            this.getSiteArticleInformation(1, val);
         },
      },
      'page.currentPage': {
         handler (val, old) {
            // console.log('页码', val)
            this.getSiteArticleInformation(val, this.navSelect);

         },
      },
   },
}
</script>

<style scoped lang="scss">
.news {
   background: #f9f9f9;
   padding-top: 30px;
   .left-nav {
      background: #fff;
      padding: 30px 15px;
      p {
         line-height: 39px;
         color: #333;
         font-size: 20px;
         text-align: center;
         background: #f1f3f5;
      }
      p.active {
         background: #0183ff;
         color: #fff;
      }
   }
   .right-list {
      background: #fff;
      padding: 30px 36px 30px 30px;

      .right-list-item {
         margin-bottom: 30px;
         .item-img {
            width: 280px;
            height: 140px;
         }
         .item-title {
            font-size: 18px;
            line-height: 28px;
            font-weight: bold;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
         }
         .item-sec,
         .item-time {
            font-size: 16px;
            color: #656565;
            line-height: 1.7;
         }
         .item-sec {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3; //行数
            overflow: hidden;
         }
         .item-time {
            margin-top: 8px;
         }
      }

      .news-pagination {
         margin: 60px 0 40px;
      }
   }
}
</style>

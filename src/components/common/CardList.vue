<template>
   <div class="cards-list">
      <b-row class="card-title text-center"
         v-if="titleObj">
         <sup-title :title="titleObj.title"
            :subTitle="titleObj.desc"></sup-title>
      </b-row>
      <b-row class="card-content">
         <b-col cols="12"
            md="6"
            lg="4"
            class="sw-col text-center d-flex justify-content-center"
            v-for="(card, idx) in cardList"
            :key="idx">
            <div class="sw-card d-flex flex-column justify-content-start align-items-center">
               <div class="mb-3 top d-flex flex-column justify-content-end align-items-center"
                  style="width:100%;">
                  <div class="icon-wrapper d-flex align-items-center justify-content-center">
                     <icon-svg class="icon"
                        :icon-class="card.icon" />
                  </div>
                  <h4 class="mt-4"
                     style="width:100%;">{{ card.title }}</h4>
               </div>
               <p class="desc"
                  style="width:100%;"
                  v-if="card.desc">
                  {{ card.desc }}
               </p>
            </div>
         </b-col>
      </b-row>
   </div>
</template>

<script>
export default {
   name: 'card-list',
   props: {
      cardList: {
         // 卡片列表
         type: Array,
         required: true,
         default: () => {
            ;[
               {
                  icon: '', // svg名称
                  title: '', // 标题
                  desc: '', // 描述
               },
            ]
         },
      },
      titleObj: {
         type: Object,
         required: false,
         default: () => {
            return null
         },
      },
   },
}
</script>

<style lang="scss" scoped>
.card-title {
   padding: 40px 0 20px 0;
}

.card-content {
   .sw-col {
      margin: 20px 0;
   }

   .sw-card {
      padding: 60px 50px;
      width: 380px;
      // height: 400px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
      border-radius: 4px;
      transition: all 0.5s ease-in-out;

      &:hover {
         box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
      }

      .top {
         // height: 185px;

         .icon-wrapper {
            // height: 90px;
         }

         .icon {
            font-size: 90px;
         }

         h4 {
            font-size: 20px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
         }
      }

      .desc {
         font-size: 18px;
         font-weight: 400;
         color: rgba(102, 102, 102, 1);
         line-height: 30px;
      }
   }
}
</style>

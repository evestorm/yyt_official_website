<template>
   <b-navbar class="navbar"
      toggleable="md"
      type="light"
      variant="light"
      fixed="top">
      <!-- fluid="xl" 最大1200宽度，用来设置版心 -->
      <b-container class="container">
         <b-navbar-brand :to="{ name: 'home' }"
            class="logo-wrapper d-flex justify-content-center align-items-center">
            <icon-svg class="logo"
               icon-class="icon-yunyutianlogo1" />
            <div class="split-line d-none d-sm-block"></div>
            <div class="sub-title d-none d-sm-block">智能数据管理服务</div>
         </b-navbar-brand>

         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

         <b-collapse id="nav-collapse"
            is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto text-center">
               <template v-for="(item, idx) in navbarArr">
                  <b-nav-item class="nav-item"
                     :key="idx"
                     :class="{ 'active': curRouteName === item.name || $route.path.includes(item.name) }"
                     v-if="!item.children"
                     :to="{ name: item.name }">
                     {{ item.title }}
                  </b-nav-item>
                  <b-nav-item-dropdown class="nav-item"
                     :text="item.title"
                     :class="{ 'active': curRouteName === item.name || $route.path.includes(item.name) }"
                     :key="idx"
                     v-else
                     left>
                     <b-dropdown-item :class="{ 'active': curRouteName === subItem.name }"
                        v-for="(subItem, index) in item.children"
                        :key="index"
                        :to="{ name: subItem.name }">
                        {{ subItem.title }}
                     </b-dropdown-item>
                     <!-- <b-dropdown-divider></b-dropdown-divider> -->
                  </b-nav-item-dropdown>
               </template>
            </b-navbar-nav>
         </b-collapse>
      </b-container>
   </b-navbar>
</template>

<script>
import store from '@/store';
export default {
   name: 'Navbar',
   computed: {
      curRouteName () {
         return this.$store.state.curRouteName
      }
   },
   data () {
      return {
         logoSrc: 'https://pic.cwyyt.cn/upload/20200813/081108118_yyt_logo.png',
         navbarArr: [{
            title: '首页',
            name: 'home'
         },
         {
            title: '方案',
            name: 'project'
         },
         {
            title: '产品',
            name: 'product',
            children: [{
               title: '预定管理',
               name: 'reserve'
            }, {
               title: '客户管理',
               name: 'customer'
            }, {
               title: '宴会管理',
               name: 'banquet'
            }, {
               title: '营销管理',
               name: 'marketing'
            }]
         },
         {
            title: '关于我们',
            name: 'about',

         },
         {
            title: '资讯',
            name: 'news'
         },
         ],
      }
   },
   mounted () {
      window.addEventListener("resize", this.onResize);
      this.onResize();
   },
   methods: {
      onResize () {
         $("body").css("padding-top", $(".navbar").outerHeight());
      },
      // 去某个路由页面
      gotoNav (item) {
         this.$router.push({
            name: item.name
         });
      }
   }
}
</script>

<style lang="scss" scoped>
.navbar {
   background: white !important;
   box-shadow: 0 1px 20px 0 rgba(46, 61, 73, 0.2);
}

.container {
   // logo
   .logo-wrapper {
      .logo {
         width: 80px;
         height: 37px;
         font-size: 60px;
      }

      .split-line {
         width: 2px;
         height: 34px;
         background: rgba(51, 133, 255, 1);
         border-radius: 1px;
         margin: 0 10px;
      }

      .sub-title {
         font-size: 20px;
         font-weight: bold;
         color: rgba(51, 133, 255, 1);
      }
   }

   // 右侧collapse
   .collapse {
      .navbar-nav {
         .nav-item {
            text-align: center;
            position: relative;

            > .nav-link {
               color: #333333;
            }

            &.active,
            &.active > .nav-link {
               // color: #3385FF;

               &::after {
                  position: absolute;
                  content: "";
                  left: 50%;
                  right: 0;
                  bottom: 0;
                  height: 2px;
                  background-color: #3385ff;
                  width: 20px;
                  transform: translateX(-50%);
               }
            }

            & /deep/ .dropdown-menu {
               min-width: 8.5rem;
               .dropdown-item {
                  padding-left: 20px;
               }
               .active {
                  .dropdown-item {
                     color: #3385ff !important;
                  }
               }
            }
         }
      }
   }
}

// 高亮文字
.container /deep/ .navbar-nav .active > .nav-link {
   color: #3385ff !important;
}

// .container /deep/ .dropdown-menu {
//    text-align: left;
// }
/deep/ .dropdown-toggle {
   color: #333 !important;
   &::after {
      display: none !important;
   }
}

// dropdown hover事件
.container /deep/ .dropdown:hover > .dropdown-menu {
   display: block;
}

.container /deep/ .dropdown > .dropdown-toggle:active {
   /*Without this, clicking will make it sticky*/
   pointer-events: none;
}
</style>
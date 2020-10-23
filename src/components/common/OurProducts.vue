<template>
  <div class="our-products">
    <b-container>
      <b-row align-h="center" class="title-wrapper">
        <b-col class="text-center">
          <sup-title title="我们的产品" :shadow="true"></sup-title>
        </b-col>
      </b-row>
      <b-row class="card-wrapper">
        <b-col class="sw-col" xs="12" sm="6" md="3" v-for="(item, idx) in cardArr" :key="idx">
          <div
            @mouseenter="enterHandler($event, item)"
            @mouseleave="leaveHandler($event, item)"
            class="sw-card d-flex flex-column justify-content-center align-items-center"
            :class="{ 'active': item.isHovered }">
            <icon-svg class="icon" :icon-class="item.icon" />
            <h5 class="pt-5 pb-3">{{ item.name }}</h5>
            <b-button :to="{ name: item.link }" class="sw-btn">查看详情</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'our-products',
    data() {
      return {
        cardArr: [{
          icon: 'icon-guanwangshouye-zhinengyudingxitong',
          name: '智能预订系统',
          link: 'reserve',
          isHovered: false
        }, {
          icon: 'icon-guanwangshouye-kehuguanlixitong',
          name: '客户管理系统',
          link: 'customer',
          isHovered: false
        }, {
          icon: 'icon-guanwangshouye-yanhuiguanlixitong',
          name: '宴会管理系统',
          link: 'banquet',
          isHovered: false
        }, {
          icon: 'icon-guanwangshouye-yingxiaoguanlixitong',
          name: '营销管理系统',
          link: 'marketing',
          isHovered: false
        }],
      }
    },
    methods: {
      enterHandler(evt, item) {
        this.cardArr.forEach(v => v.isHovered = false);
        let filter = this.cardArr.filter(v => v.name == item.name)[0]
        if (filter) {
          filter.isHovered = true;
        }
      },
      leaveHandler(evt, item) {
        this.cardArr.forEach(v => v.isHovered = false);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .our-products {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: center / cover no-repeat url("https://pic.cwyyt.cn/upload/20200817/203806386_our-product-bg.png");
    }

    .title-wrapper {
      padding: 120px 0 50px 0;

      h3 {
        font-size: 36px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        text-shadow: 0px 7px 7px rgba(0, 0, 0, 0.19);
        position: relative;

        &:after {
          position: absolute;
          content: "";
          left: 50%;
          bottom: -10px;
          width: 30px;
          transform: translateX(-50%);
          height: 3px;
          background-color: #3086FF;
        }
      }
    }

    .card-wrapper {
      padding-bottom: 60px;
      .sw-card {
        position: relative;
        background: white;
        padding: 40px 0;
        margin: 20px 0;
        &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 0;
            height: 2px;
            background: #3086FF;
            transition: .3s ease-in-out;
          }

        &.active {
          &::before {
            width: 100%;
          }
          & > .sw-btn {
            background: #3086FF;
            color: white;
          }
        }

        .icon {
          font-size: 66px;
        }

        .sw-btn {
          border: 1px solid rgba(51, 51, 51, 1);
          background: white;
          color: black;
          transition: .3s;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .card-wrapper {
      .sw-col {
        display: flex;
        justify-content: center;

        .sw-card {
          width: 60%;
          padding: 50px 0;
          margin: 20px 0;

          .icon {
            font-size: 66px;
          }
        }
      }

    }
  }
</style>
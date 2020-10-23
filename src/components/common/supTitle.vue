<template>
  <div
    class="sup-title d-flex flex-column justify-content-center align-items-center"
    :class="{ light: light }"
  >
    <h2 class="text-center" :class="{ 'sw-shadow': shadow }">{{ title }}</h2>
    <h4 class="text-center" v-if="subTitle">{{ subTitle }}</h4>
  </div>
</template>

<script>
export default {
  name: 'sup-title',
  props: {
    // 主标题
    title: {
      type: String,
      required: true,
      default: '',
    },
    // 副标题
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    // 字体颜色是否为白色
    light: {
      type: Boolean,
      required: false,
      default: false,
    },
    // 主标题是否有阴影
    shadow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
// 板块标题样式
.sup-title {
  margin: 20px 0;
  width: 100%;
  position: relative;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);

  h2 {
    font-size: 36px;
    &.sw-shadow {
      text-shadow: 0px 7px 7px rgba(0, 0, 0, 0.19);
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  &:after {
    position: absolute;
    content: '';
    left: 50%;
    bottom: -10px;
    width: 30px;
    transform: translateX(-50%);
    height: 3px;
    background-color: #3086ff;
  }
}
.sup-title.light {
  h2 {
    color: white;
  }
  h4 {
    color: rgb(211, 211, 211);
  }

  &:after {
    background-color: white;
  }
}
.row {
  margin: 0 !important;
}
</style>

<template>
  <div>
    <!-- 实现 v-model -->
    <!-- 使用 v-bind="$attrs" 将父组件设置给当前组件的属性，全部移交给子元素 -->
    <b-form-input v-if="type == 'text'" :value="value" @input="onInput" v-bind="$attrs"></b-form-input>
    <b-form-textarea v-if="type == 'textarea'" :value="value" @input="onInput" v-bind="$attrs"></b-form-textarea>
  </div>
</template>

<script>
  export default {
    name: 'swInput',
    // 设置继承属性为false
    inheritAttrs: false,
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text',
      }
    },
    methods: {
      onInput(val) {
        // 实现v-model语法糖
        this.$emit("input", val);
        // 通知formItem做校验
        this.$parent.$emit('validate');
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
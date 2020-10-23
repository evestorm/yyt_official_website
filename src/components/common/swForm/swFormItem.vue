<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot :state="state"></slot>
    <p class="err-msg" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator';

  export default {
    // 接收父组件传递给自己的form对象
    inject: ['form'],
    name: 'swFormItem',
    props: {
      label: {
        type: String,
        default: ""
      },
      prop: { // 如果当前item有校验，则prop必传，与对应model字段名相同
        type: String,
      },
    },
    data() {
      return {
        errorMessage: "",
        state: null,
      }
    },
    mounted() {
      this.$on('validate', () => {
        this.validate();
      });
    },
    methods: {
      validate() {
        // 做校验
        const value = this.form.model[this.prop]
        const rules = this.form.rules[this.prop]
        // 没规则忽略
        if (!rules) return;

        // 设置校验规则
        const desc = {
          [this.prop]: rules
        };
        // 实例化 Schema
        const schema = new Schema(desc);
        // 开始校验
        return schema.validate({
          [this.prop]: value
        }, errors => {
          this.errorMessage = errors ? errors[0].message : '';
          this.state = errors ? false : true;
        }); // return 的是个 Promise
      }
    }
  }
</script>

<style lang="scss" scoped>
.err-msg {
  color: #dc3545;
  margin: 0.25rem 0;
  font-size: 80%;
  width: 100%;
  text-align: left;
}
</style>
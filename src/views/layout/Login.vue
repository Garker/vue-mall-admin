<template>
  <div class="login">
    <a-form-model
      class="login-form"
      ref="userForm"
      :model="userForm"
      :rules="rules"
      v-bind="layout">
      <a-form-model-item has-feedback label="邮箱" prop="email" >
        <a-input v-model="userForm.email" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input v-model="userForm.password" type="password" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('userForm')">
          提交
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('userForm')">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import api from '@/api/user';

export default {
  data() {
    const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入邮箱'));
      }
      if (emailReg.test(value)) {
        return callback();
      }
      return callback(new Error('邮箱格式错误'));
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'));
      }
      return callback();
    };
    return {
      userForm: {
        email: '200571164@qq.com',
        password: 123456,
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        email: [{ validator: checkEmail, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.userForm).then((res) => {
            this.$store.dispatch('setUserInfo', res);
            this.$message.success(`欢迎${this.$store.state.user.username}`);
            this.$router.push({
              name: 'Home',
            });
          }).catch((error) => {
            this.$message.error(error);
          });
          return true;
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less">
  @import url("~@/assets/css/login.less");
</style>

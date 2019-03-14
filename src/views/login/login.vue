<!--  -->
<template>
  <div class="login">
    <div class="login-header">
      <img class="logo" src="@/assets/img/logo.png" alt="">
      <p class="title">Login</p>
    </div>
    <div class="login-form">
      <el-form class="" hide-required-asterisk status-icon :model="loginForm" :rules="loginFormRules" ref="loginFormRules" >
        <el-form-item prop="username" class="form-border" >
          <span><i class="iconfont icon-user"></i></span>
          <el-input class="login-input" clearable placeholder="请输入用户名"  v-model="loginForm.username" ></el-input>
        </el-form-item>

        <el-form-item prop="password" class="form-border" >
          <span><i class="iconfont icon-Lock" ></i></span>
          <el-input class="login-input" :type="passwordType" clearable placeholder="请输入密码" v-model="loginForm.password"></el-input>
          <span @click="changePwdType"><i class="iconfont " :class="passwordType==='password'?'icon-eye':'icon-eye_open'"></i></span>
        </el-form-item>
        
        <el-form-item prop="autoLogin">
          <el-row>
          <el-col :span="12" class="auto-login"><el-checkbox  v-model="loginForm.autoLogin">自动登陆</el-checkbox></el-col>
          <el-col :span="12" class="forgot-pwd"><a href="#" style="color:#1890ff;">忘记密码</a></el-col>
        </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登录</el-button>
        </el-form-item>

        <el-form-item>
          <el-row>
            <el-col :span="24" class="forgot-pwd"><a href="#" style="color:#1890ff;">注册账号</a></el-col>
          </el-row>
        </el-form-item>
        
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordType: 'password',
      loginForm: {
        username: 'admin',
        password: 'admin',
        autoLogin: true
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 26, message: '长度在5到26个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        autoLogin: [{ type: 'boolean', required: false, trigger: 'change' }]
      }
    };
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    changePwdType() {
      console.log('passwordType=', this.passwordType);

      this.passwordType = this.passwordType === 'password' ? '' : 'password';
    },
    login() {
      if (this.loginForm.username !== 'admin') {
        return false;
      }
      if (this.loginForm.password !== 'admin') {
        return false;
      }
      this.$router.push('/');
    }
  }
};
</script>
<style>
.el-input__inner {
  border: none;
}
</style>

<style lang='less' scoped>
.login {
  height: 100vh;
  background: url(../../assets/img/login-bg.svg) no-repeat;
  background-position: center 110px;
  background-size: 100%;
  .login-header {
    padding-top: 110px;
    .logo {
      width: 60px;
      margin-top: 20px;
      margin-right: 20px;
    }
    .title {
      display: inline-block;
      vertical-align: top;
      font-size: 33px;
      font-weight: 600;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
  }
  .login-form {
    width: 388px;
    margin: auto;
    .el-form-item {
      &.form-border {
        border-radius: 4px;
        border: 1px solid #dcdfe6;
      }

      .el-input {
        width: 85%;
        & > .el-input__inner {
          border: none;
        }
      }
    }
    .auto-login {
      text-align: left;
    }
    .forgot-pwd {
      text-align: right;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
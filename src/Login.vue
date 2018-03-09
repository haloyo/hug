<template>
    <div class="admin-login">
        <div class="login-content">
            <h2>贷后催收系统 <span class="mini-text">v1.0</span></h2>
            <div class="login-item">
              <el-input placeholder="账号" clearable v-model="admin" @blur="removeAdmin"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
              <div class="el-form-item__error" v-show="adminAlert">请输入用户名</div>
            </div>
            <div class="login-item">
              <el-input placeholder="密码" type="password"   clearable v-model="pwd" @blur="removePwd"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input> 
              <div class="el-form-item__error" v-show="adminPwd">请输入密码</div>
            </div>
            <div class="login-item login-remmber">
              <el-checkbox v-model="checked">记住用户名和密码</el-checkbox>
            </div>
            <div class="login-btn">
               <el-button plain class="login-btn-item" @click="clearConent">重置</el-button>
               <el-button type="primary" class="login-btn-item" @click="goIndex">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false, //是否记住密码
      admin: "", //用户名
      pwd: "", //密码
      adminAlert: false, //提示输入用户名
      adminPwd: false //提示输入密码
    };
  },
  methods: {
    removeAdmin() {
      this.admin == "" ? (this.adminAlert = true) : (this.adminAlert = false); //失去焦点时提示输入用户名
    },
    removePwd() {
      this.pwd == "" ? (this.adminPwd = true) : (this.adminPwd = false); //失去焦点时提示输入密码
    },
    goIndex() {
      console.log(this.admin.replace(/(^\s*)|(\s*$)/g, ""), this.pwd); //登录
      this.admin == "" ? (this.adminAlert = true) : (this.adminAlert = false);
      this.pwd == "" ? (this.adminPwd = true) : (this.adminPwd = false);
      if (!this.adminAlert && !this.adminPwd) {
        this.$message({
          message: "登录成功",
          type: "success"
        });
        this.$router.push({path:'/'})
      }
    },
    clearConent() {
      //重置
      this.admin = "";
      this.pwd = "";
      this.checked = false;
    }
  },
  watch: {
    admin() {
      // console.log(this.admin);
    }
  }
};
</script>

<style scoped>
.admin-login {
  background-size: 100% 100%;
  position: relative;
  background: #fff url(../static/img/login-bg.png);
  background-size: auto 70%;
  background-position: 15%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 600px;
}
.login-content {
  position: absolute;
  color: #333;
  box-shadow: 1px 1px 10px 1px #ddd;
  border-radius: 5px;
  background-clip: padding-box;
  background-color: #fff;
  width: 300px;
  height: 400px;
  min-width: 300px;
  min-height: 300px;
  padding: 0 100px 40px;
  overflow: hidden;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 10%;
  text-align: center;
}
h2 {
  font-size: 22px;
  display: block;
  width: 100%;
  margin: 40px auto;
}
.mini-text {
  font-size: 10px;
  color: #64b5f6;
  margin-left: 5px;
}
.login-item {
  margin-bottom: 22px;
  position: relative;
}
.login-remmber {
  text-align: left;
}
.login-btn {
  display: flex;
  justify-content: space-between;
}
.login-btn-item {
  /* 登录按钮 */
  width: 135px;
  height: 40px;
  margin: 0;
}
</style>

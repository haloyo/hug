<template>
    <div class="admin-login">
        <div class="login-content">
            <h2>贷后催收系统 <span class="mini-text">v1.0</span></h2>
            <div class="login-item">
              <el-input placeholder="账号" id="admintext"  clearable v-model="admin" @blur="removeAdmin"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
                <div class="el-form-item__error" v-show="adminAlert">请输入用户名</div>
            </div>
            <div class="login-item">
              <el-input placeholder="密码" id="pwdtext" type="password"   clearable v-model="pwd" @blur="removePwd"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input> 
              <div class="el-form-item__error" v-show="adminPwd">请输入密码</div>
            </div>
            <div class="login-item yzm-size">
              <el-input placeholder="请输入验证码"  v-model="identifying">
              </el-input>
              <div id="yzm" @click="changeYzm">
                <canvas id="canvas" width="120" height="40"></canvas>
              </div>
            </div>
            <div class="login-item login-remmber">
              <el-checkbox v-model="checked">记住用户名和密码</el-checkbox>
            </div>
            <div class="login-btn">
               <el-button plain class="login-btn-item" @click="clearConent">重置</el-button>
               <el-button type="primary" class="login-btn-item" @click="goIndex" >登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
//u_name  password
import { drawPic } from "../../static/js/yanzhengma.js";
import axios from "axios";
export default {
  data() {
    return {
      isactive: true,
      checked: false, //是否记住密码
      admin: "", //用户名
      pwd: "", //密码
      adminAlert: false, //提示输入用户名
      adminPwd: false, //提示输入密码
      identifying: "" //验证码
    };
  },
  methods: {
    removeAdmin() {
      this.adminChange();
    },
    removePwd() {
      this.pwdChange();
    },
    goIndex() {
      //登录
      // console.log(this.admin.replace(/(^\s*)|(\s*$)/g, ""), this.pwd);
      //登录
      // this.adminChange();
      // this.pwdChange();
      var _canvas = document.getElementById("canvas");
      var _code = _canvas.getAttribute("code");
      if (this.identifying == "") {
        // alert(0)
        this.$message.error("请输入验证码");
        return false;
      } else if (this.identifying != _code) {
        this.$message.error("验证码输入错误");
        return false;
      } else if (this.admin == "") {
        this.adminChange();
        return false;
      } else if (this.pwd == "") {
        this.pwdChange();
        return false;
      } else {
        sessionStorage.setItem("uis",123123)
        this.$router.push({ path: "/" });
      }
    },
    clearConent() {
      //重置
      this.admin = "";
      this.pwd = "";
      this.checked = false;
    },
    adminChange() {
      var _admin = document.getElementById("admintext");
      if (this.admin == "") {
        this.adminAlert = true;
        _admin.style.border = "1px solid #ff4949";
      } else {
        this.adminAlert = false;
        _admin.style.border = "1px solid #bfcbd9";
      } //失去焦点时提示输入用户名
    },
    pwdChange() {
      var _pwd = document.getElementById("pwdtext");
      if (this.pwd == "") {
        this.adminPwd = true;
        _pwd.style.border = "1px solid #ff4949";
      } else {
        this.adminPwd = false;
        _pwd.style.border = "1px solid #bfcbd9";
      } //失去焦点时提示输入密码
    },
    loginDo() {
      this.axios
        .post("http://192.168.10.120:8080/login", {
          u_name: this.admin,
          password: this.pwd
        })
        .then(function(response) {
          // if(response.data==1){
          // }else{
          //   this.$message.error('用户名或密码错误');
          // }
        })
        .catch(function(error) {});
    },
    changeYzm() {
      drawPic(); //点击更换验证码
      this.identifying = ""; //清空验证码
    }
  },
  watch: {},
  created() {
    setTimeout(function() {
      drawPic(); //进入页面载入验证码
      // document.onkeydown = function(e) {
      //   var key = window.event.keyCode;
      //   if (key == 13) {
      //     _this.goIndex();
      //   }
      // };
    }, 1500);
  }
};
</script>

<style scoped>
/* #ff4949 */
.admin-login {
  background-size: 100% 100%;
  position: relative;
  background: #fff url(../../static/img/login-bg.png);
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
.el-input__inner {
  border: 1px solid #bfcbd9;
}
.yzm-size {
  width: 180px;
  position: relative;
}
#yzm {
  position: absolute;
  top: 0;
  right: -120px;
  cursor: pointer;
}
</style>

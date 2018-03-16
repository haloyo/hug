<template>
  <div class="admin-rightcon">
    <div class="rightcon-nav">
       菜单三 
    </div>
    <div class="doworker">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="职务选择">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="超管" value="4" v-if="user_type==1"></el-option>
            <el-option label="催收组长" value="2" v-if="user_type==1"></el-option>
            <el-option label="催收专员" value="1" v-if="user_type==2||user_type==1"></el-option>
            <el-option label="财务" value="3" v-if="user_type==1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工号">
          <el-input v-model="form.gNumber" @blur="numberAlter"></el-input>
        </el-form-item>
        <div class="numAlert" v-show="numalter">工号已存在</div>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="创建组名" v-show="this.form.region == 2">
          <el-input v-model="form.gname"></el-input>
        </el-form-item>
        <el-form-item label="配分组" v-show="this.form.region == 3">
          <el-select v-model="form.group" placeholder="请选择">
            <el-option label="组1" value="eqw"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="座机号" v-show="this.form.region == 3||this.form.region == 2">
          <el-input v-model="form.studio"></el-input>
        </el-form-item>
        <el-form-item label="座机密码" v-show="this.form.region == 3||this.form.region == 2">
          <el-input v-model="form.studioPwd"></el-input>
        </el-form-item>
        <div class="addAlert">以上均为必填字段</div>
        <el-form-item>
          <el-button type="primary" @click="addJober">立即添加</el-button>
          <el-button @click="clearForm">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
//1组员,2组长,3财务,4超管
export default {
  data() {
    return {
      form: {
        name: "", //姓名
        gNumber: "", //工号
        region: "", //职务
        tel: "", //手机号
        pwd: "", //密码
        sex: "", //性别
        gname: "", //组名
        studio: "", //座机号
        group: "", //配分组
        studioPwd: "" //座机密码
      },
      user_type: "", //角色
      numalter: false
    };
  },
  methods: {
    clearForm() {
      this.form.name = ""; //姓名
      this.form.gNumber = ""; //工号
      this.form.region = ""; //职务
      this.form.tel = ""; //手机号
      this.form.sex = ""; //性别
      this.form.gname = ""; //组名
      this.form.studio = ""; //座机号
      this.form.group = ""; //配分组
      this.form.studioPwd = ""; //座机密码
      this.form.pwd = ""; //密码
    },
    numberAlter() {
      if (this.form.gNumber != "") {
        this.axios
          .post("http://192.168.10.119:8080/user/findByEmployee_number", {
            employee_number: this.form.gNumber
          })
          .then(function(response) {
            if (response.data.data != 0) {
              this.numalter = true;
            }else{
              this.numalter = true;
            }
          })
          .catch(function(error) {});
      }
    },
    addJober() {
      if (this.form.region == "") {
        this.$message.error("请先选择职务！！！");
        return false;
      } else if (this.form.gNumber == "") {
        this.$message.error("请填写工号！！！");
        return false;
      } else if (!/^\d{4,6}$/.test(this.form.gNumber)) {
        this.$message.error("工号位4~6位数字哦！！！");
        return false;
      } else if (this.form.name == "") {
        this.$message.error("请填写姓名！！！");
        return false;
      } else if (this.form.tel == "") {
        this.$message.error("请填写手机号！！！"); //
        return false;
      } else if (!/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.form.tel)) {
        this.$message.error("您输入的手机号有误！！！"); ///^1[3|4|5|6|7|8|9][0-9]{9}$/
        return false;
      } else if (this.form.pwd == "") {
        this.$message.error("请填写密码！！！"); //
        return false;
      } else if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.form.pwd)
      ) {
        this.$message.error("密码必须为6~12位以上英文加数字！！！"); //
        return false;
      } else if (this.form.sex == "") {
        this.$message.error("请填写性别！！！");
        return false;
      } else {
        var role_id = parseInt(this.form.region); //角色
        var employee_number = this.form.gNumber; //工号
        var employee_name = this.form.name; //姓名
        var employee_phone_number = this.form.tel; //手机号
        var employee_password = this.form.pwd; //密码
        if (this.form.sex == "男") {
          var employee_sex = 0;
        } else {
          var employee_sex = 1;
        } //性别 0男 1女
        var phone_password = this.form.studioPwd; //座机密码
        var phone_number = this.form.studio; //座机号
        var team_id = parseInt(this.form.group); //分组
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.addDo(
              role_id,
              employee_number,
              employee_name,
              employee_phone_number,
              employee_password,
              employee_sex,
              "0",
              "0",
              0
            );
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    addDo(a, b, c, d, e, f, g, h, j) {
      this.axios
        .post("http://192.168.10.119:8080/user/register", {
          role_id: a,
          employee_number: b,
          employee_name: c,
          employee_phone_number: d,
          employee_password: e,
          employee_sex: f,
          phone_password: g,
          client_id: 0,
          phone_number: h,
          team_id: j
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {});
    }
  },
  created() {
    this.user_type = sessionStorage.getItem("user_type"); //获取角色
  }
};
</script>

<style scoped>
.doworker {
  text-align: left;
  margin: 15px 0;
  width: 500px;
  position: relative;
}
.addAlert {
  color: red;
  padding-left: 80px;
  margin-bottom: 15px;
  font-size: 12px;
}
.numAlert {
  position: absolute;
  z-index: 9;
  right: -67px;
  color: red;
  font-size: 12px;
  top: 73px;
}
</style>
<template>
  <div class="admin-rightcon">
    <div class="rightcon-nav">
       菜单一  
    </div>
    <div class="rightcon-title">
      <el-input size="medium"  placeholder="请输入内容" class="acc"></el-input>
      <el-button size="medium" type="primary" icon="el-icon-search" @click="sousuo()">搜索</el-button>
    </div>
    <div class="admin-table">
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column   prop="date"  label="日期"  width="180">
        </el-table-column>
        <el-table-column  prop="name"  label="姓名"  width="180">
        </el-table-column>
        <el-table-column  prop="address"  label="地址">
        </el-table-column>
        <el-table-column label="操作" width="150">
				<template slot-scope="scope">
        <el-button  size="mini"  @click="handleEdit()" >编辑</el-button>
        <el-button  size="mini"  type="danger"  @click="handleDelete(scope.index)" >删除</el-button>
      </template>
			</el-table-column>
      </el-table>
    </template>
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="pageall">
    </el-pagination>
  </div>
   
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      currentPage3: 1,
      pageall: 20
    };
  },
  methods: {
    sousuo() {
    },
    handleEdit() {
      console.log(this.coo);
    }, //编辑
    handleDelete(a) {
      console.log(a);
    }, //删除
    handleSizeChange() {
      
    },
    handleCurrentChange() {
      
    },
    creatPage(name) {
      var data = [];
      let _this = this;
      this.axios
        .post("http://101.132.171.22/Backs/order/findAgent.do", {
          search: name
        })
        .then(function(response) {
          var _l = response.data.data; //获取数据
          var _long=_l.length;//总条数
          for (let i = 0; i < _long; i++) {
            //数据循环
            var obj = {};
            obj.address = _l[i].idnumber;
            obj.date = _l[i].name;
            obj.name = _l[i].phone_number;
            _this.coo = _l[i].sales_number;
            data[i] = obj;
          }
          _this.tableData = data;
        })
        .catch(function(error) {});
    }
  },
  created() {
    this.creatPage("");
  }
};
</script>

<style>
.rightcon-title {
  background: #f2f2f2;
  text-align: left;
  padding: 5px 10px;
  margin: 10px 0;
}
.acc {
  width: 180px;
}
.page-top {
  margin: 15px 0;
  text-align: right;
}
</style>

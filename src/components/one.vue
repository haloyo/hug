<template>
  <div class="admin-rightcon">
    <div class="rightcon-nav">
       菜单一  
    </div>
    <div class="rightcon-title">
      <el-input size="medium"  placeholder="请输入内容" class="acc" v-model="content"></el-input>
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
        <el-button  size="mini"  type="danger"  @click="handleDelete()" >删除</el-button>
      </template>
			</el-table-column>
      </el-table>
    </template>
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
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
      pageall: 0,
      content: null
    };
  },
  methods: {
    sousuo() {},
    handleEdit() {
      console.log(this.coo);
    }, //编辑
    handleDelete() {
     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }, //删除
    handleSizeChange() {
       //控制每页条数的方法
      console.log(2); //获取搜索框中的值
    },
    handleCurrentChange(val) {
      //翻页方法
      console.log(1); //获取搜索框中的值
      console.log(`${val}`); //获取当前页
      this.creatPage(parseInt(`${val}`),this.content);
    },
    creatPage(_page, _search) {
      var data = [];
      let _this = this;
      this.axios
        .post("http://101.132.171.22/Backs/order/customerManagement.do", {
          page: _page,
          search: _search
        })
        .then(function(response) {
          var _l = response.data.data.list; //获取数据
          var _long = response.data.data.number; //总页数
          for (let i = 0; i < _l.length; i++) {
            //数据循环
            var obj = {};
            obj.address = _l[i].address;
            obj.date = _l[i].actual_stop_time;
            obj.name = _l[i].name;
            // _this.coo = _l[i].sales_number;
            data[i] = obj;
          }
          _this.tableData = data;
          _this.pageall = _long;
        })
        .catch(function(error) {});
    },
    sousuo() {
      console.log(this.content); //获取搜索框中的值
      this.creatPage(1,this.content); //搜索并调用请求
    }
  },
  created() {
    this.creatPage(1, this.content);
  },
  watch: {//监听文本框值的变化
    content(oldVal) {
      console.log(oldVal);
    }
  }
};
</script>

<style scoped>
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

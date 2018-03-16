<template>
  <div class="admin-rightcon">
    <div class="rightcon-nav">
       菜单二  
    </div>
    <div class="cus-menu">
      <div class="demo-input-suffix">
        客户姓名
        <el-input
        placeholder="请输入内容"  class="cus-size" size="mini">
        </el-input>
        手机号
        <el-input
        placeholder="请输入内容" class="cus-size" size="mini">
        </el-input>
        案件标记
          <el-select v-model="value" placeholder="请选择" size="mini" class="cus-size">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value" >
            </el-option>
          </el-select>
        批次号
        <el-input
        placeholder="请输入内容" class="cus-size" size="mini">
        </el-input>
         <el-button size="mini" type="primary" plain class="cus-size">搜索</el-button>
          <el-button size="mini" type="primary" plain class="cus-size">重置</el-button>
    </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  };
</script>

<style scoped>
.cus-menu{
  margin: 10px 0;
  padding-left: 10px;
}
.cus-size{
  width: 100px;
  margin: 0 5px;
}
.demo-input-suffix{
  text-align: left;
  font-size: 12px;
}
</style>
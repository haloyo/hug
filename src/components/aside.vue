<template>
    <div class="admin-left">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#28313e"
      text-color="#fff"
      active-text-color="#d81919" unique-opened >
      <el-submenu index="1" v-if="this.neumStorage==1">
        <template slot="title">
          <i><img :src="index_icon" class="index_icon"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link :to="{ path: '/one' }">首页</router-link></el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-2"><router-link :to="{ path: '/count' }">统计</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link :to="{ path: '/two' }">首页</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>员工管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><router-link :to="{ path: '/worker' }">添加员工</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </div>
</template>

<script>
export default {
  data(){
    return{
        neumStorage:null,
        uniqueOpened: false,
        index_icon:'../../static/img/index.png'
    }
  },
  methods: {
    
  },
  created(){
      this.neumStorage=localStorage.getItem("user")
  }
};
</script>

<style>
.admin-left {
  float: left;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 218px;
  background-color: #28313e;
  overflow: auto;
}
.el-submenu__title{
  text-align: left;
}
.el-submenu .el-menu-item{
  padding: 0 !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.admin-left a{
  color: #fff;
  display: inline-block;
  width: 100%;
}
</style>

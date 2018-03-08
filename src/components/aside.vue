<template>
    <div class="admin-left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#20222A"
      text-color="#fff"
      active-text-color="#409eff">
       <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>我的首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/one">首页</router-link></el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title"><router-link to="/two">导航三</router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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
  background-color: #20222A;
  overflow: auto;
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
</style>

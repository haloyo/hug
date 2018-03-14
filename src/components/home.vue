<template>
    <div >
      <div class="admin-nav">
        <div class="admin-top-menu">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              欢迎您,管理员<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    <!-- <admin-top></admin-top> -->
        <div class="admin-content clear">
        <admin-aside></admin-aside>
        <div class="admin-right">
            <transition name="fade"
                        mode="out-in">
                    <router-view>
                        
                    </router-view>
                </transition>
        </div>
    </div>
    </div>
</template>

<script>
import adminAside from "../components/aside";
import adminHome from "../components/one";
export default {
  components: {
    adminAside,
    adminHome
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.admin-right {
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 201px;
  background-color: #ffffff;
  overflow: auto;
}
.admin-nav{
  text-align: right;
  line-height: 60px;
  padding: 0 30px;
  background:#20222A url('../../static/img/logo.png') no-repeat;
   background-position: 30px 50%;
}
.admin-top-menu{
  display: inline-block;
  /* font-size: 18px; */
  background: url('../../static/img/head.png') no-repeat;
  background-position: 0 50%;
  padding-left: 50px; 
}
.el-dropdown{
  color: #fff;
}
 </style>

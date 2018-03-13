<template>
    <div >
    <admin-top></admin-top>
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
import adminTop from "../components/top";
import adminHome from "../components/one";
export default {
  components: {
    adminAside,
    adminTop,
    adminHome
  },
  data() {
    return {};
  },
  methods: {}
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

</style>

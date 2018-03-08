<template>
  <div id="app">
    <Top></Top>
    <div class="admin-content clear">
      <Aside></Aside>
      <div class="admin-right">
          <transition name="fade"
		            mode="out-in">
			      <router-view></router-view>
		      </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "./components/aside";
import Top from "./components/top";
export default {
  components: {
    Aside,
    Top
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/long.css' //公共样式
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(router);

const routers = new VueRouter({
    router
})


router.beforeEach((to, from, next) => {
    //判断用户信息
    if (to.path == '/login') {
        sessionStorage.removeItem('kk_user');
    }
    let user = sessionStorage.getItem('kk_user');
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
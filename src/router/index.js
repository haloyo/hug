import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'
import Home from '@/components/home'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: '',
        component: Login
    }, {
        path: '/',
        name: '导航一',
        component: Home,
        children: [{
            path: '/one',
            component: One,
            name: '主页'
        }, {
            path: '/two',
            component: Two,
            name: '主页'
        }]
    }]
})
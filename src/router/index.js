import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'
import Two from '@/components/two'
import Worker from '@/components/three'
import Home from '@/components/home'
import Login from '@/components/login'
import Count from '@/components/count'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: '',
        component: Login
    }, {
        path: '/',
        name: '导航一',
        redirect: '/count',
        component: Home,
        children: [{
            path: '/one',
            component: One,
            name: '主页'
        }, {
            path: '/two',
            component: Two,
            name: '主页'
        }, {
            path: '/worker',
            component: Worker,
            name: '主页'
        }, {
            path: '/count',
            component: Count,
            name: '主页'
        }]
    }]
})
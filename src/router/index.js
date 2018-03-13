import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'
import Home from '@/components/home'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        component: Login
    }, {
        path: '/',
        component: Home,
        children: [{
            path: '/one',
            component: One
        }]
    }]
})
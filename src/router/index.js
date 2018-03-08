import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import One from '@/components/one'
import Two from '@/components/two'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/one',
        component: One
    }, {
        path: '/two',
        component: Two
    }]
})
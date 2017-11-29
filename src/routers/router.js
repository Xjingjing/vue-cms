import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

import HomeContainer from "../components/tabcontainer/HomeContainer.vue"
import MemberContainer from "../components/tabcontainer/MemberContainer.vue"
import CartContainer from "../components/tabcontainer/CartContainer.vue"
import SearchContainer from "../components/tabcontainer/SearchContainer.vue"

export default new VueRouter({
    routes: [
        {
           path: "/home",  
           component: HomeContainer
        },
        {
            path:"/member",
            component: MemberContainer
        },
        {
            path:"/cart",
            component:CartContainer
        },
        {
            path:"/search",
            component:SearchContainer
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
});


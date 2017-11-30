import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

// 导航
import HomeContainer from "../components/tabcontainer/HomeContainer.vue"
import MemberContainer from "../components/tabcontainer/MemberContainer.vue"
import CartContainer from "../components/tabcontainer/CartContainer.vue"
import SearchContainer from "../components/tabcontainer/SearchContainer.vue"

// 新闻
import newslist from "../components/news/newslist.vue"
import newsinfo from "../components/news/newsinfo.vue"

//图片分享
import picList from "../components/pic/picList.vue"
import picInfo from "../components/pic/picInfo.vue" 

//商品购买
import goodsList from "../components/goods/goodslist.vue"
import goodsInfo from "../components/goods/goodsinfo.vue"
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
        },
        {
            path:'/home/newslist',
            component:newslist
        },
        {
            path:"/home/newsinfo/:id",
            component:newsinfo
        },
        {
            path:"/home/piclist/:id?",
            component:picList
        },
        {
            path:"/home/picinfo/:id",
            component:picInfo
        },
        {
            path:"/home/goodslist",
            component:goodsList
        },
        {
            path:"/home/goodsinfo/:id",
            component:goodsInfo
        }
    ]
});


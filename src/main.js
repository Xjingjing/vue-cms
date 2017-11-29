import Vue from "vue";

//引入根组件
import App from "./App.vue"

import router from "./routers/router.js"

import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI);

var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {App}
})
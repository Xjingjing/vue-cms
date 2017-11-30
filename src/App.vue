<template>
  <div class="zong">
    <mt-header fixed title="Xjingjing" class="mt-header">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <router-view/>

    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" @click="$router.push('/home')">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" @click="$router.push('/member')">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" @click="$router.push('/cart')">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{cartNumber}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" @click="$router.push('/search')">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
  </div>
</template>

<script>
import eventbus from "./store/eventbus.js"
import store from "./store/store.js"
export default {
  data(){
    return {
      cartNumber:0
    }
  },
  created(){
    eventbus.$on("cartChange",cart => {
      this.cartNumber = store.getAllCount();
    })
    this.cartNumber = store.getAllCount();
  }
};
</script>

<style>
* {
	touch-action:none;
}
  html,body{
    margin: 0;
    padding: 0;
    background-color: #fff;
    height: 100%;
  }
  .container{
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .zong{
    height: 100%;
  }
  .mint-header.is-fixed{
    z-index: 99;
  }
</style>

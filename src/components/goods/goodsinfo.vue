<template>
    <div class="container">
        <transition @before-enter="beforeEnter" @enter="enter">
            <div class="red-ball" v-if="isShowBall"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in pics" :key="index">
                        <img :src="item.src" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">
                {{goodsInfo.title}}
            </div>
            <div class="mui-card-content">
                 <div class="mui-card-content-inner">
                    <p>市场价：<del>￥{{goodsInfo.sell_price}}</del> &nbsp;&nbsp;销售价：<span class="sell-price">￥{{goodsInfo.market_price}}</span></p>
                    <div class="count">
                        <count :min="min" :max="goodsInfo.stock_quantity" :step="step"
                                 @numberupdate="getCount"></count>
                    </div>
                    <div class="btns">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>
                    </div>
                 </div>
            </div>
        </div>

        <div class="mui-card goodsbtn">
            <div class="mui-card-header">
                商品参数
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：剩余{{goodsInfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodsInfo.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" plain size="large">图文介绍</mt-button>
                <mt-button class="goodscomment" type="danger" plain size="large">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import count from "../common/count.vue"
import dateformatter from "../../filters/dateformatter.js"

import eventbus from "../../store/eventbus.js"
import store from "../../store/store.js"
export default {
  data(){
      return {
            pics:[],
            goodsInfo:{},
            min:0,
            max:10,
            step:5,
            isShowBall:false,
            count:0
      }
  },
  components:{
      "count":count
  },
  filters:{
      dateformatter
  },
  created(){
      this.getlunbo();
      this.getGoodsInfo();
  },
  methods:{
      getCount(number){
          this.count = number;
      },
      getlunbo(){
          axios({
              url:"http://vue.studyit.io/api/getthumimages/"+this.$route.params.id
          }).then(res => {
              if(res.data.status == 0){
                //   console.log(res);
                  this.pics = res.data.message;
                //   console.log(this.pics);
              }
          })
      },
      getGoodsInfo(){
          axios({
              url:"http://vue.studyit.io/api/goods/getinfo/"+this.$route.params.id
          }).then(res => {
              if(res.data.status == 0){
                  console.log(res);
                  this.goodsInfo = res.data.message[0];
              }
          })
      },
      beforeEnter(el){
          el.style.top = "410px";
          el.style.left = "150px";
      },
      enter(el){
          el.offsetWidth;
          el.style.transition = "all .4s cubic-bezier(0.29, -0.38, 1, 0.68)";
          el.style.top = 500 + window.scrollY + "px";
          el.style.left = "200px";
          this.isShowBall = false;
      },
      addCart(){
          this.isShowBall = true;
          store.addToCarts({id:this.$route.params.id,count:this.count})
          eventbus.$emit("cartChange");
      }
  }
}
</script>

<style>
.red-ball {
  width: 15px;
  height: 15px;
  background-color: red;
  position: absolute;
  border-radius: 50%;
  top: 410px;
  z-index: 999;
  left: 150px;
}

    .container{
        margin-bottom: 60px
    }
    .mui-card:nth-child(1){
        margin-top: 50px;
    }
    .mint-swipe{
        height: 200px;
        text-align: center;
    }
    .mint-swipe-item img{
        margin-top: 5px;
        height: 90%;
    }
    .sell-price{
        color:red;
        font-size: 16px;
    }
    .mui-card-footer{
        display: block;
    }
    .mui-card-footer .goodscomment{
        margin-top: 10px;
    }
</style>

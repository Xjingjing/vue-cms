<template>
  <div class="container">
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
            <a class="mui-control-item mui-active" @click="$router.push('/home/piclist/0')">
                全部
            </a>
            <a class="mui-control-item" v-for="(item,index) in picCate" :key="index" 
             @click="$router.push('/home/piclist/'+item.id)">
                {{item.title}}
            </a>
        </div>
    </div>
    <ul>
        <li class="pic" v-for="(item,index) in picList" :key="index" @click="$router.push('/home/picinfo/'+item.id)">
            <img class="pic-item" alt="" v-lazy="item.img_url">
            <div class="pictxt">
                <h4>{{item.title}}</h4>
                {{item.zhaiyao}}
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import mui from "../../lib/mui/js/mui"
export default {
    data(){
        return {
            picList:[],
            picCate:[]
        }
    },
    created(){
        this.getCategory();
        this.getPicList();
    },
    mounted(){
         mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
    },
    methods:{
        getCategory(){
            axios({
                url:"http://vue.studyit.io/api/getimgcategory"
            }).then(res => {
                if(res.data.status == 0){
                    // console.log(res);
                    this.picCate = res.data.message
                }
            })
        },
        getPicList(){
            axios({
                url:"http://vue.studyit.io/api/getimages/"+(this.$route.params.id || 0)
            }).then(res => {
                if(res.data.status == 0){
                    console.log(res);
                    this.picList = res.data.message;
                }
            })
        }
    },
    watch:{
        "$route":function(){
            this.getPicList();
        }
    }
};
</script>


<style>
    ul{
        list-style: none;
        padding:10px;
    }
    .pic img{
        width: 100%;
    }
    .pic{
        box-shadow: 0 0 15px 3px #666;
        margin-bottom: 10px;
        position: relative;
        background-color: #ccc;
        text-align: center;
    }
    .pictxt{
        position:absolute;
        bottom:5px;
        left:0;
        padding:5px;
        background-color: rgba(0,0,0,.2);
        color:#fff;
        font-size: 14px;
    }
    .pictxt h4{
        font-size: 16px;
    }
    img[lazy=loading] {
        width: 40px !important;
        height: 300px;
        margin: auto;
    }
</style>

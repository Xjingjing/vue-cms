<template>
  <div class="container">
     <ul class="mui-table-view mui-table-view-chevron">
		<li class="mui-table-view-cell mui-media" v-for="(item,index) in news" :key="index">
			<router-link :to="'/home/newsinfo/' + item.id" class="mui-navigate-right">
				<img class="mui-media-object mui-pull-left" :src="item.img_url">
				<div class="mui-media-body mui-ellipsis">
					{{item.title}}
				    <p class="mui-ellipsis news-time"><span>发表时间：{{item.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span><span class="mui-pull-right">点击量：{{item.click}}</span></p>
				</div>
			</router-link>
	    </li>
	</ul>
  </div>
</template>

<script>
import axios from "axios"
import dateformatter from "../../filters/dateformatter.js"
export default {
    data(){
        return {
            news:[]
        }
    },
    filters:{
        dateformatter
    },
    created(){
        axios({
        url:"http://vue.studyit.io/api/getnewslist"
    }).then(res => {
        if(res.data.status == 0){
            // console.log(res);
            this.news = res.data.message
        }
    })
    }
};
</script>

<style>
    .news-time{
        font-size: 10px;
    }
</style>

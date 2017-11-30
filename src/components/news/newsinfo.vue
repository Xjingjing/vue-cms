<template>
  <div class="container">
     <detail :newsinfo="newsinfo">

     </detail>
     <div class="comment">
       <comment :id="$route.params.id"></comment>
     </div>
  </div>
</template>

<script>
import dateformatter from "../../filters/dateformatter.js"
import axios from "axios"
import comment from "../common/comment.vue"
import detail from "../common/datail.vue"
export default {
  data(){
    return {
      newsinfo:{}
    }
  },
  filters:{
    dateformatter
  },
  components:{
    comment,
    detail
  },
  created(){
    axios({
      url:"http://vue.studyit.io/api/getnew/"+this.$route.params.id
    }).then(res => {
      if(res.data.status == 0){
        // console.log(res);
        this.newsinfo = res.data.message[0];
      }
    })
  }
}
</script>

<style>
   .container{
     padding: 5px;
   }
   .news-head{
     border-bottom: 1px solid #ccc;
   }
   .news-content img{
    width: 100%;
   }
</style>

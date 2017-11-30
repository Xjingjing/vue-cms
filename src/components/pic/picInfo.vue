<template>
  <div class="container">
      <detail :newsinfo="picinfo">
          <div slot="imgs" class="thumbs">
              <img class="preview-img" v-for="(item, index) in imgs" :key="index" :src="item.src" @click="$preview.open(index, imgs)">
          </div>
      </detail>
      <comment :id="$route.params.id">

      </comment>
  </div>
</template>

<script>
import Vue from "vue"
import VuePreview from "vue-preview"
Vue.use(VuePreview);

import axios from "axios"
import detail from "../../components/common/datail.vue"
import comment from "../../components/common/comment.vue"
export default {
  data(){
      return {
          picinfo:{},
          imgs:[]
      }
  },
  components:{
      detail,
      comment
  },
  created(){
      this.getPicInfo();
      this.getImg();
  },
  methods:{
      getPicInfo(){
          axios({
          url:"http://vue.studyit.io/api/getimageinfo/"+this.$route.params.id
        }).then(res => {
            if(res.data.status == 0){
                console.log(res);
                this.picinfo = res.data.message[0];
            }
        })
      },
      getImg(){
           axios({
          url:"http://vue.studyit.io/api/getthumimages/"+this.$route.params.id
      }).then(res => {
          if(res.data.status == 0){
              console.log(res);
              this.imgs = res.data.message.map(v => {
                  v.h = 400;
                  v.w = 600;
                  return v;
              })
          }
      })
      }
  }
}
</script>

<style>
    .container{
        padding:10px;
    }
    .news-head{
     border-bottom: 1px solid #ccc;
   }
   .thumbs img{
        width: 22%;
        margin: 0 5px;
        box-shadow: 0 0 15px #999
    }
    .container{
        padding:10px;
    }
</style>

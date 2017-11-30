<template>
    <div>
      <div class="news-head">
        <h4>{{newsinfo.title}}</h4>
        <p class='mui-ellipsis news-time '>
          <span>发布时间: {{newsinfo.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span>
          <span class="mui-pull-right">点击：{{newsinfo.click}}次</span>
        </p>
      </div>
      <slot name="imgs"></slot>
      <div class="news-content" v-html="newsinfo.content"> 

      </div>
    </div>  
</template>

<script>
import dateformatter from "../../filters/dateformatter.js"
export default {
  props:["newsinfo"],
  filters:{
    dateformatter
  }
}
</script>

<style>
  .news-head{
    border-bottom: 1px solid #ccc;
  }
</style>

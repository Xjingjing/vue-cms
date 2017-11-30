<template>
  <div class="numnum-box">
      <span>购买数量：</span>
      <div class="numnum">
          <span @click="countJian">-</span><span><input v-model="number" type="text" id="num"></span><span @click="countAdd">+</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            number:0
        }
    },
    props:["min","max","step"],
    methods:{
        countJian(){
          if(this.number > this.min){
              var step = this.step || 1;
              this.number -= step;
          }
      },
      countAdd(){
            if(this.number < this.max){
              var step = this.step || 1;
              this.number += step;
          }
      }
  },
  watch:{
      number(){
          this.$emit('numberupdate',this.number);
      }
  }
}
</script>

<style scoped>
    .numnum span{
       float: left;
        width: 40px;
        height: 30px;
        border-right:1px solid #ccc;    
        text-align: center;
        line-height: 28px;
    }
    .numnum span:last-child{
        border:none;
    }
    #num{
        width: 100%;
        height: 100%;
        border:none;
        padding: 0;
        margin: 0;
        text-align: center;
        border-bottom:1px solid #ccc;
        height: 29px;
        font-size: 14px;
    }
    .numnum{
        display: inline-block;
        height: 30px;
        width: 122px;
        border:1px solid #ccc;
        vertical-align: middle;
    }
    .numnum-box{
        margin-bottom: 10px;        
    }
</style>

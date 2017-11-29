<template>
  <div>
    <mt-header fixed title="固定在顶部">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <router-view/>

    
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>

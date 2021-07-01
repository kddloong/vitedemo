<template>
  <div class="container">
    <div class="container__fold-icon">
      <i class="el-icon-s-unfold" @click="addTarget" v-show="collapse"></i>
      <i class="el-icon-s-fold" @click="addTarget" v-show="!collapse"></i>
    </div>
    <div class="container__bread-crumb">
      <el-breadcrumb separator="\">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      collapse: false
    }
  },
  methods:{
    addTarget(){
      this.$emit('addTarget');
      this.collapse = !this.collapse;
    }
  },
  watch:{
    $route(to, from){
      console.log(to);
      console.log(from);
    }
  }

}
</script>

<style scoped>
.container {
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
}

.container__fold-icon {
  height: 100%;
  width: 60px;
  display: inline-block;

}

.container__fold-icon:hover{
  background-color: #eee;
}

[class^="el-icon-s-"]{
  font-size: 2rem;
  line-height: 60px;
}
</style>
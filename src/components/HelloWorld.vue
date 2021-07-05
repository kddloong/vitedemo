<template>
  <el-container>
    <el-aside :style="widthStyle">
      <Aside :collapse="collapse"></Aside>
    </el-aside>
    <el-container>
      <el-header style="padding: 0">
        <Header @add-target="addTarget()"></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../container/Header.vue";
import Main from "../container/Main.vue";
import Aside from "../container/Aside.vue";

export default {
  components: {Aside, Header, Main},
  data() {
    return {
      collapse: false,
      widthStyle: {
        width: '200px'
      }
    }

  },
  methods:{
    addTarget(){
      this.collapse = !this.collapse;
    },
    doCollapse: function (){
      this.widthStyle = {
        width: '4rem'
      }
    },
    doAntiCollapse: function (){
      this.widthStyle = {
        width: '200px'
      }
    }
  },
  watch: {
    collapse(newCollapse, oldCollapse){
      if(newCollapse){
        this.doCollapse();
      }else {
        this.doAntiCollapse();
      }
    }
  },
};
</script>

<style>
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 4rem;
  padding: 0;
  height: 4rem;
}

.el-aside {
  color: #333;
  height: 100vh;
  width: 200px;
  transition: width .4s cubic-bezier(0.4, 0, 1, 1);
}

.el-main {
  height: calc(100vh - 60px);
  padding: 0;
  width: 100%;
  background-color: hsl(0, 0%, 98%);
}


</style>


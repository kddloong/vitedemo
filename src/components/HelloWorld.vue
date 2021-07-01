<template>
  <el-container>
    <el-aside style="width: 200px">
      <Title :collapse="collapse"></Title>
      <Aside :collapse="collapse"></Aside>
    </el-aside>
    <el-container>
      <el-header>
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
import Title from "../container/Title.vue";

export default {
  components: {Aside, Header, Main, Title},
  data() {
    return {
      collapse: false,
      widthStyle: {
        width: '4rem'
      }
    }

  },
  methods:{
    addTarget(){
      this.collapse = true;
    },
    addAntiATarget(){
      this.collapse = false;
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
      console.log(newCollapse);
      console.log(oldCollapse);
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
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100vh;
  width: 200px;
  transition: width 0.5s linear;
}

.el-main {
  height: calc(100vh - 60px);
  padding: 0;
  width: 100%;
}
</style>


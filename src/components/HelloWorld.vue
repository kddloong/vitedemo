<template>
  <el-container>
    <el-aside width="200px">
      <Title></Title>
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
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

  }
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
}

.el-main {
  height: calc(100vh - 60px);
  padding: 0;
}
</style>


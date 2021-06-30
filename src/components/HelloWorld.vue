<template>
  <el-container>
    <el-header>
      <Header>

      </Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
                <Aside></Aside>
      </el-aside>
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
  height: calc(100vh - 60px);
}

.el-main {
  height: calc(100vh - 60px);
  padding: 0;
}
</style>


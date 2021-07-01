<template>
  <el-breadcrumb separator="\">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in routesList">
      {{item.path}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      routesList: []
    }
  },
  methods: {
    getRoutesList(array){
      console.log(typeof array);
      console.log(array);
      console.log(this.routesList);
      console.log(`123`);
    }
  },
  watch: {
    $route(to, from) {
      console.log(to);
      this.getRoutesList(to);
      console.log(from);
    }
  }
}
</script>

<style scoped>

</style>
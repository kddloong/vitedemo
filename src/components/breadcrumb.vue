<template>
  <div>
    <el-breadcrumb separator="\">
      <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
      <transition name="el-fade-in-linear">
        <!--      <div>-->
        <template v-for="(item, index) in routesList" v-if="routesList.length > 0">
          <template v-if="item.name !== 'Dashboard'">
            <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
          </template>
        </template>
        <!--      </div>-->

      </transition>
    </el-breadcrumb>
  </div>

</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      routesList: [],
    }
  },
  methods: {
    getRoutesList(array) {
      this.routesList = array.matched
    },
  },
  watch: {
    $route(to, from) {
      this.getRoutesList(to)
    },
  },
}
</script>

<style scoped>
.el-breadcrumb__item {
  font-size: 0.875rem;
}
</style>

<template>
  <el-menu :default-openeds="['1', '3']" :collapse="collapse" router>

    <template v-for="(item, index) in DataList">
      <el-menu-item v-if="item.children.length === 0" :index="item.path">
        <i :class="item.icon"></i>
        <template #title>{{item.name}}</template>
      </el-menu-item>
      <el-submenu v-else-if="item.children.length > 0" :index="index">
        <template #title>
          <i :class="item.icon"></i>
          <span v-text="item.name"></span>
        </template>
        <el-menu-item v-for="subMenu in item.children" :index="subMenu.path">
          <i :class="subMenu.icon"></i>
          <span v-text="subMenu.name"></span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import {routes} from "../router";

export default {
  name: "Aside",
  props: ['collapse'],
  data() {
    return {
      DataList: routes
    }
  },
  created() {
    console.log(this.DataList);
  }
}
</script>

<style scoped>

</style>
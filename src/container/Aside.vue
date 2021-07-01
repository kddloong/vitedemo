<template>
  <el-menu :default-openeds="['1', '3']" :collapse="collapse" router>



    <el-submenu
        :index="item.path"
        v-for="item in DataList"

    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
          :index="subItem.path"
          v-for="subItem in item.children"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ subItem.name }}</span>
      </el-menu-item>
    </el-submenu>



  </el-menu>
</template>

<script>
import  {routes} from "../router";

export default {
  name: "Aside",
  props: ['collapse'],
  data(){
    return{
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
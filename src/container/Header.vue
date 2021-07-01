<template>
  <div class="container">
    <i class="el-icon-s-unfold" @click="$emit('addTarget')" v-if=""></i>
    <i class="el-icon-s-fold" @click="$emit('addTarget')" v-if=""></i>
    <el-dropdown>
      <button class="el-icon-setting" style="margin-right: 15px" @click="$emit('addTarget')"></button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>王小虎</span>
  </div>

</template>

<script>
export default {
  name: "Header",
  data(){
    return{

    }
  },
  methods:{
  }

}
</script>

<style scoped>
.el-icon-s-unfold{
  font-size: 2rem;
  line-height: 60px;
}
</style>
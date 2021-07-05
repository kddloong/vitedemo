<template>
  <div class="title">
    <div class="title__img-box">
      <img src="../../public/haimian.jpg" alt="" class="title__img">
    </div>
    <div class="title__text" :style="displayNone">模板项目</div>
  </div>
<!-- -->
  <el-menu :default-openeds="['1', '3']" :collapse="collapse"  @select="selectItem">
    <template v-for="(item, index) in DataList">
      <el-menu-item v-if="item.children.length === 0" :index="{path:item.path,name: item.name}">
        <i :class="item.icon"></i>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
      <el-submenu v-else-if="item.children.length > 0" :index="index">
        <template #title>
          <i :class="item.icon"></i>
          <span v-text="item.name"></span>
        </template>
        <el-menu-item v-for="subMenu in item.children" :index="{path:`${item.path}/${subMenu.path}`,name:subMenu.name}" :route="item">
          <i :class="subMenu.icon"></i>
          <span v-text="subMenu.name"></span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import {router, routes} from "../router";

export default {
  name: "Aside",
  props: ['collapse'],
  data() {
    return {
      DataList: routes,
      displayNone: {}
    }
  },
  created() {

  },
  watch: {
    collapse(newCollapse, oldCollapse) {
      if (newCollapse) {
        this.doCollapse();
      } else {
        this.doAntiCollapse();
      }
    }
  },
  methods: {
    doCollapse: function () {
      this.displayNone = {
        display: 'none'
      }
    },
    doAntiCollapse: function () {
      this.displayNone = {
        display: ''
      }
    },
    selectItem: function (index, indexPath){
      let routeObj = {
          type: true,
          name: index.name,
          closeAble: true
      };

      this.$store.commit('addPageList',routeObj);
      console.log(index.path);
      router.push(index.path);




    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-start;
  height: 3rem;
}

.title__img-box {
  height: 3.5rem;
  box-sizing: border-box;
}

.title__img {
  width: 3em;
  height: 3em;
  padding-left: 10px;
  padding-top: 10px;
}

.title__text {
  height: 3rem;
  font-size: 1rem;
  line-height: 3rem;
  margin-left: 1rem;
  box-sizing: border-box;

}
/*设置侧边栏宽度时，必须将.el-menu--collapse排除，否则动画效果出现BUG*/
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  /*transition: width .5s linear;*/
}

.container__bread-crumb {
  transition:  width 1s linear;
}
</style>

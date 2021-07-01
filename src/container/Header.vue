<template>
  <div class="container">
    <div class="container__fold-icon">
      <i class="el-icon-s-unfold" @click="addTarget" v-show="collapse"></i>
      <i class="el-icon-s-fold" @click="addTarget" v-show="!collapse"></i>
    </div>
    <div class="container__bread-crumb">
      <breadcrumb></breadcrumb>
    </div>
  </div>
</template>

<script>
import breadcrumb from "../components/breadcrumb.vue";
export default {
  name: "Header",
  components: {breadcrumb},
  data(){
    return{
      collapse: false
    }
  },
  methods:{
    addTarget(){
      this.$emit('addTarget');
      this.collapse = !this.collapse;
    }
  },
  watch:{

  }

}
</script>

<style scoped>
.container {
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
}

.container__fold-icon {
  height: 100%;
  width: 60px;
  display: inline-block;

}

.container__fold-icon:hover{
  background-color: #eee;
}

[class^="el-icon-s-"]{
  font-size: 2rem;
  line-height: 60px;
}
</style>
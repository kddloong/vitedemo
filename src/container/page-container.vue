<template>
<div class="page-container">
  <template v-for="(item,name,index) in pageList">
{{item}}
    {{name}}
    <ElButton type="small">{{item[name]}}</ElButton>
  </template>
</div>
</template>

<script>
import store from "../store";
export default {
  name: "page-container",
  data(){
    return{

    }
  },
  computed: {
    pageList () {
      return store.state.pageList
    }
  },
  created() {
  }
}
</script>

<style scoped>
.page-container .el-button{
  position: relative;
  padding-right: 17px;
}

.page-container .el-button::after{
  content: "\2716";
  position: absolute;
  right: 3px;
}
</style>

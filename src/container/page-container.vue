<template>
<div class="page-container">
    <el-tag
        v-for="tag in pageList"
        :key="tag[1].name"
        :closable="tag[1].closeAble"
        @click="openPageBy(tag[1].url, tag[1])"
        @close="closeTag(tag[0])"
        size="medium"
        :effect="tag[1].type ? 'dark': 'plain'"
        >
      {{tag[1].name}}
    </el-tag>
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
  },
  methods: {
    openPageBy(url, tag){
      this.$router.push(url);
      this.$store.commit('addPageList', tag);
    },
    closeTag(key){
      this.$store.commit('deletePageList', key)
    }
  }
}
</script>

<style scoped>
.page-container{
  box-sizing: border-box;
  padding-left: 1em;
  padding-bottom: .3em;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  height: 2em;
}

.el-tag{
  cursor: pointer;
  font-size: .9em;
}

.page-container .el-tag+ .el-tag{
  margin-left: .5em;
}



</style>

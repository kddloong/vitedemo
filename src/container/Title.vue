<template>
  <div class="title">
    <div class="title__img-box">
      <img src="../../public/haimian.jpg" alt="" class="title__img">
    </div>


    <div class="title__text" :style="displayNone">模板项目</div>
  </div>

</template>

<script>
export default {
  name: "Title",
  props: ['collapse'],
  data(){
    return{
      displayNone: {}
    }
  },
  watch: {
    collapse(newCollapse, oldCollapse){
      console.log(newCollapse);
      console.log(oldCollapse);
      if(newCollapse){
        this.doCollapse();
      }else {
        this.doAntiCollapse();
      }
    }
  },
  methods: {
    doCollapse: function (){
      this.displayNone = {
        display: 'none'
      }
    },
    doAntiCollapse: function (){
      this.displayNone = {
        display: ''
      }
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-start;
}

.title__img-box{
  height: 3.5rem;
}

.title__img {
  width: 2em;
  height: 2em;
  padding-left: 20px;
}

.title__text {
  height: 60px;
  text-align: center;
  font-size: 1rem;
  line-height: 3.75rem;
}
</style>
<template>
  <div class="container">
    <div class="container__fold-icon">
      <img src="../../public/unfold.svg" alt="" @click="addTarget" class="container__img" :class="collapse? '':'is-active'"/>
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

.container__img{
  margin: 14px;
  width: 32px;
  height: 32px;
  font-size: 2rem;
  line-height: 60px;
  transform: rotate(0deg);
  transition-duration: .2s;
}


.is-active{
  transform: rotate(180deg);
  transition-duration: .2s;
}

</style>
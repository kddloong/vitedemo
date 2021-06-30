<template>
  <div class="title">
    <img src="../../public/haimian.jpg" alt="" class="title__img">

    <div class="title__text">模板项目</div>
  </div>

</template>

<script>
export default {
  name: "Title"
}
</script>

<style scoped>
.title{
  display: flex;
  align-items: center;

  justify-content: space-around;
}

.title__img {
  width: 2em;
  height: 2em;
}

.title__text {
  height: 60px;
  text-align: center;
  font-size: 1rem;
  line-height: 3.75rem;
}
</style>
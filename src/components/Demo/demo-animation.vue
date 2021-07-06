<template>
  <div id="demo">
    <button @click="show = !show">
      Toggle
    </button>

    <transition name="fade">
<!--      <p v-if="show">hello</p>-->
      <div v-if="show"><p>hello</p></div>
    </transition>
  </div>

</template>

<script>
export default {
  name: "demo-animation",
  data() {
    return {
      show: true
    }
  },
  created() {
    console.log(33);
    this.x = '3'
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX
    }
  }
}
</script>

<style scoped>
#demo{
  position: relative;
}

div {
  position: absolute;
  left: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  left: 0;
}

.fade-enter-to,.fade-leave-from{
  left: 50px;
}


</style>

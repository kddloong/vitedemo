<template>
  <div class="drawer-button" :class="{'drawer-button--before_context': drawer}" @click="drawer = !drawer">
    <i :class="{'el-icon-setting':!drawer, 'el-icon-close': drawer}"></i>
  </div>
  <div class="drawer-container" :class="{'drawer-container--show': drawer}" id="drawer-container" @click="clickAA">

      <div class="drawer-container__context" :class="{'drawer-container__context--drawer': drawer}">

      </div>

  </div>

</template>

<script>

export default {
  name: "drawer",
  data() {
    return {
      drawer: false,
      closeRight: 0
    }
  },
  methods: {
    isOpen() {
      this.drawer = true;
    },
    handleClose(done) {
      // this.drawer = false
    },
    clickAA(e){
      console.log(e.target);
      console.log(e.currentTarget)
      console.log('123');
    },
    clickBB(e){
      e.preventDefault();
    }
  }
}
</script>

<style scoped>
.drawer-button {
  position: fixed;
  right: 0;
  top: 22rem;
  color: #fff;
  background-color: #409eff;
  font-size: 24px;
  border-radius: 6px 0 0 6px;
  width: 4rem;
  height: 4rem;
  text-align: center;
  margin-top: -2rem;
  z-index: 10;
  transition: all .4s linear;
}

.drawer-button--before_context {
  right: 20rem;
}

.drawer-button i {
  font-size: 3rem;
  line-height: 4rem;
}

.drawer-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  opacity: 0;
  transition: all .4s linear;
  z-index: 1;
}

.drawer-container--show {
  visibility: visible !important;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.4);
}

.drawer-container__context {
  position: fixed;
  right: 0;
  background-color: #fff;
  height: 100vh;
  width: 0;
  transition: all .4s linear;
  z-index: 100;
}

.drawer-container__context--drawer {
  width: 20rem;
}
</style>

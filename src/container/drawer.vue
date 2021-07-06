<template>
  <div class="drawer-button" :class="{'drawer-button--before_context': drawer}" @click="isOpen">
    <i class="el-icon-setting"></i>
  </div>
  <div class="drawer-container" :class="{show: drawer}" id="drawer-container">

    <transition name="my-context">
      <div class="drawer-container__context" v-if="drawer">

      </div>
    </transition>

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

}

.drawer-button i {
  font-size: 3rem;
  line-height: 4rem;
}

.drawer-button--before_context{
  right: 20rem;
  transition: right .4s linear;
}


.show {
  visibility: visible !important;
  opacity: .4;
  transition: opacity .4s linear;
  background-color: rgba(0, 0, 0, 0.4);
}


.drawer-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
}


.drawer-container__context {
  position: fixed;
  right: 0;
  background-color: #fff;
  height: 100vh;
  width: 20rem;
  transition: all .4s linear;
}


</style>

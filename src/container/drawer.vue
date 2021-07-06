<template>
  <div class="drawer-button" @click="isOpen">
    <i class="el-icon-setting"></i>
  </div>
  <transition name="fade11">
    <div class="drawer-container"  id="drawer-container">
      <div class="drawer-button" @click="drawer = !drawer">
        <i class="el-icon-setting"></i>
      </div>

      <transition name="my-context">
        <div class="drawer-container__context" v-if="drawer">

        </div>
      </transition>
      <transition name="my-close" mode="out-in">
        <div @click="drawer = !drawer" class="close-button" v-if="drawer">
          <i class="el-icon-close"></i>
        </div>
      </transition>
    </div>


  </transition>
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

.drawer-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .4);
}


.drawer-container__context {
  position: fixed;
  right: 0;
  background-color: #fff;
  height: 100vh;
  width: 20rem;
}

@keyframes showPanel {
  0% {
    width: 0;
  }
  100% {
    width: 20rem;
  }
}



.close-button {
  position: fixed;
  top: 22rem;
  right: 20rem;
  color: #fff;
  background-color: #409eff;
  font-size: 24px;
  border-radius: 6px 0 0 6px;
  width: 4rem;
  height: 4rem;
  text-align: center;
  margin-top: -2rem;
}


.close-button i {
  font-size: 3rem;
  line-height: 4rem;
}

.my-context-enter-active {
  /*transition: all 0.5s ease 1s;*/
  animation: showPanel .5s linear;
}

.my-context-leave-active {
  /*transition: all 0.5s ease 1s;*/
  animation: showPanel .5s linear reverse;
}

.my-context-enter-from,
.my-context-leave-to {
  width: 0;
}

@keyframes showCloseButton {
  0%{
    right: 0;
  }
  100%{
    right: 20rem;
  }
}

.my-close-enter-active {
  /*transition: all 0.5s ease 1s;*/
  animation: showCloseButton .5s linear;
}

.my-context-leave-active {
  /*transition: all 0.5s ease 1s;*/
  animation: showPanelReverse .5s linear reverse;
}

</style>

<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <drawer></drawer>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import drawer from "./container/drawer.vue";
export default {
  name: 'App',
  components: {
    HelloWorld,
    drawer
  }
}
</script>

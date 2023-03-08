<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    Happy Birthday Jessica !!!
  </header>
  <HelloWorld />
  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  width: 100%;
  background: linear-gradient(to right, #000 30%, #404 100% ) 50%, linear-gradient(90deg, #000 70%, #404 100%) 100%;
  font-size: 2.5rem;
  font-weight: bold;
  color: #c0c;
  text-align: center;
  text-shadow: 1px 1px px #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Mystery Quest', cursive;
  letter-spacing: 2px;
}

</style>

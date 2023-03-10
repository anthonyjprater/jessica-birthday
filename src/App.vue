<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img class="logo" src="src/assets/christmas-jack.png" alt=""/>
      <h1>Happy Birthday Jessica</h1>
    <img class="logo" src="src/assets/jack-face.png" alt=""/>
  </header>
  <HelloWorld />
  <!-- <RouterView /> -->
</template>

<style scoped>

@font-face {
  font-family: 'Nightmare';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/NightmareBeforeChristmas.ttf') format('truetype');
}

header {
  width: 100%;
  background: linear-gradient(to right, #000 30%, #404 100% ) 50%, linear-gradient(90deg, #000 70%, #404 100%) 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #c0c;
  text-align: center;
  text-shadow: 1px 1px px #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Nightmare', cursive;
  letter-spacing: 2px;
  padding: 0 0 2rem;
}

.logo {
  width: 50px;
  filter: drop-shadow(-2px -2px 3px rgb(160, 0, 250));
  align-self: flex-end;
}

@media (min-width: 1024px) {
  header {
    font-size: 2rem;
    padding: 0;
  }

  .logo {
    align-self: center;
  }
}

</style>

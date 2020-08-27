<template>
  <div id="app">
    <h1>Map</h1>
    <KakaoMap />
  </div>
</template>

<script>
import KakaoMap from "./components/KakaoMap.vue";

export default {
  components: { 
    KakaoMap
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 900px;
  margin: auto;
}
</style>

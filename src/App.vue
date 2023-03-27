<template>
  <div class="app">
    <ItemTimer />
  </div>
</template>

<script setup>
import ItemTimer from "./components/ItemTimer.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  background: #353638;
  height: 100vh;
  margin: 0 auto;
}
</style>

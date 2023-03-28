<template>
  <div class="app">
    <TimerItems />
  </div>
</template>

<script setup>
import TimerItems from "./components/TimerItems.vue";
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

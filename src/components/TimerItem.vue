<template>
  <div class="timer-display">
    <div v-if="hours > 0">
      <span>{{ hours }}</span>
      <span>:</span>
    </div>
    <div v-if="minutes > 0 || hours > 0">
      <span>{{ minutes }}</span>
      <span>:</span>
    </div>
    <div>
      <span>{{ seconds }}</span>
    </div>
  </div>
  <div class="btns-container">
    <div class="btn" v-if="!hideCompleted" @click="startTimer">
      <svg
        width="17"
        height="20"
        viewBox="0 0 17 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 20V0L17 10L0 20Z" />
      </svg>
    </div>
    <div class="btn" v-else @click="stopTimer">
      <svg
        width="10"
        height="20"
        viewBox="0 0 10 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="7" width="3" height="20" />
        <rect width="3" height="20" />
      </svg>
    </div>
    <div class="btn" @click="clearTimer">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const seconds = ref(59);
const minutes = ref(59);
const hours = ref(12);
const timer = ref(null);

const hideCompleted = ref(false);

function startTimer() {
  hideCompleted.value = true;
  timer.value = setInterval(() => {
    if (seconds.value > 59) {
      seconds.value = 0;
      minutes.value++;
      if (minutes.value > 59) {
        minutes.value = 0;
        hours.value++;
      }
    }
    seconds.value++;
  }, 1000);
}

function stopTimer() {
  hideCompleted.value = false;
  clearInterval(timer.value);
}

function clearTimer() {
  hideCompleted.value = false;
  clearInterval(timer.value);
  seconds.value = 0;
  minutes.value = 0;
  hours.value = 0;
}
</script>

<style scoped>
.timer-display {
  color: #9e9e9e;
  font-family: "Gotham Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 21px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #9e9e9e;
}

.btns-container {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}

.btn {
  cursor: pointer;
  outline: none;
  width: 19px;
  height: 20px;
  text-align: center;
  fill: #9e9e9e;
}

.checkbox {
  opacity: 0;
  position: absolute;
  height: 20px;
  width: 20px;
  left: 61px;
  cursor: pointer;
}
</style>
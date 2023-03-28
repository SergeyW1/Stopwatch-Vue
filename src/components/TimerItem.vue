<template>
  <div class="timer-display">
    <div v-if="rectangleItem.minutes > 59">
      <span>{{ currentTime.hourse }}</span>
      <span>:</span>
    </div>
    <div v-else-if="rectangleItem.seconds > 59">
      <span>{{ rectangleItem.minutes }}</span>
      <span>:</span>
    </div>
    <div>
      <span>{{ rectangleItem.seconds }}</span>
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
    <div class="btn">
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
import { defineProps, ref } from "vue";
defineProps({
  rectangleItem: {
    type: Object,
    required: true,
  },
});

const currentTime = ref(null);

const hideCompleted = ref(false);

let now = ref(new Date());

function startTimer() {
  hideCompleted.value = true;
  let t = Date.parse(now.value) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  console.log(t);
  if (t < 0) {
    currentTime.value = {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  console.log(currentTime);
}

function stopTimer() {
  hideCompleted.value = false;
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
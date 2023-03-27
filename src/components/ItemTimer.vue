<template>
  <div class="container">
    <div class="timers">
      <div class="rectangle" v-for="item in rectangleItem" :key="item">
        <div class="rectangle__timer-display">
          <div>
            <span>{{ item.hourse }}</span>
          </div>
          <span>:</span>
          <div>
            <span>{{ item.minutes }}</span>
          </div>
          <span>:</span>
          <div>
            <span>{{ item.seconds }}</span>
          </div>
        </div>
        <div class="btns-container">
          <input class="checkbox" type="checkbox" v-model="item.done" />
          <div class="btn" v-if="!item.done">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 20V0L17 10L0 20Z" />
            </svg>
          </div>
          <div class="btn" v-else>
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
      </div>
      <div class="rectangle">
        <div @click="addItem" class="addBtn"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rectangleItem = ref([
  { hourse: 0, minutes: 0, seconds: 0, done: false },
  { hourse: 0, minutes: 0, seconds: 0, done: false },
  { hourse: 0, minutes: 0, seconds: 0, done: false },
  { hourse: 0, minutes: 0, seconds: 0, done: false },
]);

const addItem = () => {
  rectangleItem.value.push({ hourse: 0, minutes: 0, seconds: 0, done: false });
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/gotham-pro?styles=24950");

.container {
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
}

.timers {
  display: flex;
  padding: 72px 212px;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 45px 50px;
}

.rectangle {
  width: 225px;
  height: 120px;
  background: #696969;
  display: flex;
  flex-direction: column;
}

.rectangle__timer-display {
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

.addBtn {
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.addBtn::before {
  content: "";
  transform: rotate(180deg);
  height: 3px;
  width: 20px;
  background: #9e9e9e;
  position: absolute;
  top: 50%;
  left: 47%;
}

.addBtn::after {
  content: "";
  transform: rotate(90deg);
  height: 3px;
  width: 20px;
  background: #9e9e9e;
  position: absolute;
  top: 50%;
  left: 47%;
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

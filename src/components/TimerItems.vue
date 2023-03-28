<template>
  <div class="container">
    <div class="timers">
      <div
        class="rectangle"
        v-for="rectangleItem in rectangleItems"
        :key="rectangleItem"
      >
        <TimerItem />
      </div>
      <div class="rectangle">
        <div @click="addItem" class="addBtn"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TimerItem from "./TimerItem.vue";
import { ref } from "vue";

const id = ref(0);

const rectangleItems = ref([
  { id: id.value++ },
  { id: id.value++ },
  { id: id.value++ },
  { id: id.value++ },
]);

const addItem = () => {
  rectangleItems.value.push({ id: id.value++ });
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
</style>

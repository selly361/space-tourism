<template>
  <main>
    <div>
      <div class="content">
        <h6>
          <strong>02</strong>
          Meet your crew
        </h6>
        <article>
          <h5 class="role">{{ currentTab.role }}</h5>
          <h2>{{ currentTab.name }}</h2>
          <p>{{ currentTab.bio }}</p>
        </article>
        <div class="tab-buttons">
          <button
            v-for="i in [0, 1, 2, 3]"
            @click="setCurrentTab(i)"
            v-bind:key="i"
            :class="{ active: currentIndex == i }"
          />
        </div>
      </div>
      <img :src="currentTab.images.png" />
    </div>
  </main>
</template>

<script setup>
import data from "@/data/data";
import { ref } from "vue";


const crewTab = ref(data.crew);
const currentIndex = ref(0);
const currentTab = ref(crewTab.value[currentIndex.value]);

function setCurrentTab(i){
  currentIndex.value = i
  currentTab.value = crewTab.value[i]
}
</script>

<style scoped>
main {
  width: 100vw;
  background: url("@/assets/crew/background-crew-desktop.jpg") no-repeat;
  background-size: cover;
  display: grid;
  align-items: end;
  padding-top: 212px;
}

h2 {
  font-family: "Bellefair";
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
}

h6 {
  margin-bottom: 160px;
}

strong {
  font-family: "Barlow Condensed";
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
}

p {
  height: 170px;
}

.role {
  font-family: "Bellefair";
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
}

.tab-buttons {
  display: flex;
  gap: 24px;
  align-items: center;
}

main > div:first-child {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.content {
  height: 600px;
  width: 488px;
  margin-left: 165px;
}

article {
  display: grid;
  gap: 15px;
}

button {
  width: 15px;
  height: 15px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.17;
  border-radius: 50%;
  transition: 1s opacity;
  margin-top: 20px;
  cursor: pointer;
}

.active {
  opacity: 1;
}
</style>

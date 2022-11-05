<template>
  <main>
    <div class="container">
      <div class="intro">
        <p>01</p>
        <h2 class="title">Pick your destination</h2>
      </div>
      <div class="content">
        <img :src="currentTab.images.png" />

        <div class="tab-container">
          <ul>
            <li
              v-for="tab of tabs"
              v-bind:key="tab"
              @click="() => setCurrentTab(tab)"
            >
              <button>
                {{ tab }}
              </button>
            </li>
          </ul>
          <h2>{{ currentTab.name }}</h2>
          <p>{{ currentTab.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

import data from "@/data/data"
import { ref } from "vue"

const destinationTab = ref(data.destinations);
const currentTab = ref(destinationTab.value[0]);

function setCurrentTab(planetName) {
  currentTab.value = destinationTab.value.find(
    (planet) => planet.name === planetName
  );
}

const tabs = ["Moon", "Mars", "Europa", "Titan"];
</script>

<style scoped>
main {
  height: 900px;
  background: url("@/assets/destination/background-destination-desktop.jpg")
    no-repeat;
  background-size: cover;
  padding-top: 212px;
}

.container {
  width: calc(100vw - 155px);
  height: 542px;
  display: grid;
  gap: 1rem;
  margin: auto;
}

ul {
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
}

li {
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #ffffff;
}

.intro {
  display: flex;
  gap: 28px;
  height: max-content;
}

.intro p {
  font-family: "Barlow Condensed";
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 4.725px;
  color: #ffffff;
  opacity: 0.25;
}

.title {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: #ffffff;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.tab-container {
  width: 445px;
  height: 472px;
}
</style>

<template>
  <main>
    <div class="container">
      <div class="intro">
        <strong>01</strong>
        <h6>Pick your destination</h6>
      </div>
      <div class="content">
        <img :src="currentTab.images.png" />

        <div class="tab-container">
          <ul>
            <li
              v-for="tab of tabs"
              v-bind:key="tab"
              @click="() => setCurrentTab(tab)"
              :class="{ active: currentTab.name === tab }"
            >
              {{ tab }}
            </li>
          </ul>
          <h2 class="planet-name">{{ currentTab.name }}</h2>
          <p>{{ currentTab.description }}</p>

          <div class="divider" />
          <div class="stats-container">
            <div>
              <h5>AVG. DISTANCE</h5>
              <h6>{{ currentTab.distance }}</h6>
            </div>

            <div>
              <h5>Est. travel time</h5>
              <h6>{{ currentTab.travel }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import data from "@/data/data";
import { ref } from "vue";

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
  background: url("@/assets/destination/background-destination-desktop.jpg") no-repeat;
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
  height: 34px;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 37px;
}

li {
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #ffffff;
  cursor: pointer;
  transition: 1s border ease;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
}

.active {
  border-bottom: 2px solid white;
}

li:hover {
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
}

.intro {
  display: flex;
  gap: 28px;
  height: max-content;
}



.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.tab-container {
  width: 445px;
  height: 472px;
  display: flex;
  flex-direction: column;
}

.divider {
  background: #383b4b;
  height: 1px;
  width: 100%;
  margin: 54px 0 28px 0;
}

.stats-container {
  display: flex;
  gap: 79px;
}

.stats-container h5 {
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  color: #d0d6f9;
}

.stats-container h6 {
  font-family: "Bellefair";
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: #ffffff;
}

.stats-container > div {
  display: grid;
  gap: 12px;
}

.planet-name {
  text-transform: uppercase;
}

img {
  margin-left: 160px;
}
</style>

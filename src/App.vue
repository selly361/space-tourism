<script setup>
import { ref, computed } from "vue";
import NavBarVue from "@/components/layout/NavBar.vue";

import {
  HomePageVue,
  CrewPageVue,
  TechnologyPageVue,
  DestinationPageVue,
} from "./pages";

const routes = {
  "/": HomePageVue,
  "/crew": CrewPageVue,
  "/technology": TechnologyPageVue,
  "/destination": DestinationPageVue,
};



const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"];
});
</script>

<template>
  <NavBarVue />
  <component :is="currentView" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;700&family=Bellefair&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

h1 {
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
  color: #ffffff;
}

a,
button {
  text-decoration: unset;
  border: unset;
  outline: unset;
}
</style>

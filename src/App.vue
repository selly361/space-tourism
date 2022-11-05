<script setup>
import { ref } from "vue";
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

const path = ref(location.pathname);
</script>

<template>
  <NavBarVue />
  <component :is="routes[path]" />
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

h2 {
  font-family: "Bellefair";
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: #ffffff;
}

p {
  font-family: "Barlow";
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}

a,
button {
  text-decoration: unset;
  border: unset;
  outline: unset;
}
</style>

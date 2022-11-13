<template>
  <header>
    <a href="/">
      <img src="@/assets/icons/logo.svg" />
    </a>

    <nav>
      <li
        v-for="({ path, label }, index) in navItems"
        :key="label"
        :class="{ active: currentPath === path }"
      >
        <a :href="path">
          <strong> 0{{ index }} </strong>
          {{ label }}
        </a>
      </li>
    </nav>
  </header>
</template>

<script setup>
import { navItems } from "./nav-items";
import { ref } from "vue";

const currentPath = ref(window.location.pathname);



</script>

<style scoped>
header {
  position: absolute;
  width: 95vw;
  height: 96px;
  left: 55px;
  top: 40px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 30;
}

img {
  width: 48px;
  height: 48px;
}

nav {
  width: 830px;
  height: 96px;
  left: 610px;
  top: 40px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

li {
  height: 100%;
  display: grid;
  place-items: center;
  transition: 1s ease border;
  border-bottom: 3px solid transparent;
}

a {
  text-decoration: none;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #ffffff;
}

li.active, li.unActive {
  border-bottom: 3px solid #ffffff;
}



li:hover {
    border-bottom: 3px solid #D0D6F9;
  }

strong {
  margin-right: 11px;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #ffffff;
}
</style>

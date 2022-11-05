<template>
  <main>
    <img :src="currentTab.images.png" />
  </main>
</template>
    
<script setup>


import { useDestinationTab } from "@/store/destinationTab";

const { currentTab } = useDestinationTab();
</script>

<style scoped>
main {
  height: 900px;
  width: 100vw;
  background: url("@/assets/destination/background-destination-desktop.jpg")
    no-repeat;
  background-size: cover;
}
</style>

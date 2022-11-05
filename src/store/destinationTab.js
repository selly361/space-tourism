import data from "@/data/data"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useDestinationTab = defineStore('counter', () => {
    const destinationTab = ref(data.destinations)
    const currentTab = ref(destinationTab.value[0])
    
    

    function setCurrentTab(planetName){
      currentTab.value = destinationTab.value.find(planet => planet.name === planetName)
    }
  
    return { setCurrentTab, currentTab, destinationTab }
  })
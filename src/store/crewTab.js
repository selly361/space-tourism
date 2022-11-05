import data from "@/data/data"
import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', () => {
    const crewTab = ref(data.crew)

    

    function increment() {
      count.value++
    }
  
    return { count, increment }
  })
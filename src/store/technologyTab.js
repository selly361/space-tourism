import data from "@/data/data"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useCounterStore = defineStore('counter', () => {
    const technologyTab = ref(data.technology)
    const currentTab = ref("")
    

    function increment() {
      count.value++
    }
  
    return { count, increment }
  })
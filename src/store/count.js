import { defineStore } from 'pinia'
const useCounter = defineStore('counter', {
  state: () => {
    return {
      count: 99
    }
  },
  getters: {
    doubleCounter(state) {
      return state.count * 2
    },
    getDoubleCounter() {
      return (id)=> {
        return this.doubleCounter + id
      }
    }
  },
  actions: {
    increment() {
      this.count ++
    }
  }
})

export default useCounter
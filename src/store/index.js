import { defineStore } from 'pinia'
export default defineStore('myGlobalState', {
  state: () => {
    return {
      count: 1,
      message: 'pinia',
      phone: 15118252171
    }
  },
  getters: {
    phoneHidden (state) {
      console.log('Getter被调用')
      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  actions: {
    inCrement() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    }
  }
})
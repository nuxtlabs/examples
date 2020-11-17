export const state = () => ({
    pageVisits: 0
  })
  
  export const mutations = {
    increment (state) {
      state.pageVisits++
    }
  }
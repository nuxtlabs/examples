export const state = () => ({
  helloMsg: ''
})

export const mutations = {
  changeHelloValue(state, newValue) {
    this.$hello(newValue)
    state.helloMsg = newValue
  }
}

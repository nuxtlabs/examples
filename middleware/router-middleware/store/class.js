export const state = () => ({
  bodyClass: ''
})

export const mutations = {
  SetClass (state, bodyClass) {
    state.bodyClass = bodyClass
  }
}
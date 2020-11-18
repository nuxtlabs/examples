export default function ({ store, route }) {
  store.commit('class/SetClass', route.name)
}

export default function ({redirect, store}) {
    const isAuthenticated = store.state.auth.user ? true : false
    if (!isAuthenticated) {
      redirect({name: 'auth'})
    }
  }
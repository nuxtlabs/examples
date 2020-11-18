<template>
  <div>
    <h1>Named Middleware 👻</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$store.commit('auth/setUser', null)
      this.$store.commit('auth/setPass', null)
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

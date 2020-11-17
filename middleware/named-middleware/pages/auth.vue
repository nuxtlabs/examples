<template>
  <div>
    <form @submit.prevent>
      <label for="username">Username</label>
      <input v-model="user.username" id="username" type="text" />
      <label for="password">Password</label>
      <input v-model="user.password" id="password" type="text" />
      <button @click="login" :disabled="!user.username || !user.password">
        Login
      </button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      login() {
        this.$store.commit('auth/setUser', this.user.username)
        this.$store.commit('auth/setPass', this.user.password)
        this.$router.push({ name: 'named-middleware' })
      },
    },
  }
</script>
<style scoped>
  div {
    max-width: 400px;
    margin: 20px auto;
  }
</style>

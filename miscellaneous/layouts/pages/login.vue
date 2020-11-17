<template>
  <div>
    <form @submit.prevent>
      <label for="username">Username</label>
      <input v-model="user.username" id="username" type="text">
      <label for="password">Password</label>
      <input v-model="user.password" id="password" type="text">
      <!-- <button @click="login" :disabled="!user.username || !user.password">Login</button> -->
      <NuxtLink to="/profile" class="button">Login</NuxtLink>
    </form>
  </div>
</template>
<script>
export default {
  layout: 'auth',
data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
}
</script>
<style scoped>
div {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}

label {
  font-size: 14px;
  margin: 0 0.5rem;
  margin-bottom: 0.25rem;
}

input {
  font-size: 16px;
  padding: 0.75rem 1rem;
  margin: 0 0.5rem;
  margin-bottom: .5rem;
  border: 1px solid #dedede;
  border-radius: 0.5rem;
  box-shadow: none;
  box-sizing: border-box;
}

.button {
  margin-top: 0.5rem;
}

.button[disabled] {
  cursor: default;
  opacity: .5;
  cursor: not-allowed;
}
.button {
  background: var(--primary-color);
  padding: 0.75rem 1.5rem;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  letter-spacing: 0.5px;
  margin: 0 0.5rem;
}

button:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: 0.8;
}
</style>
<template>
  <div>
    <h1>Admin Page</h1>
    <p>If you are not authenticated you canno't see this page</p>
  </div>
</template>
<script>
  export default {
    middleware({ store, redirect }) {
      const isAuthenticated = store.state.authenticated ? true : false
      if (!isAuthenticated) {
        return redirect('/')
      }
    },
  }
</script>

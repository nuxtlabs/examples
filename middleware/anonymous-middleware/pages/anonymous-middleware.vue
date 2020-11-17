<template>
  <div>
    <h1>Analytics Page</h1>
    <p>Visits: {{this.$store.state.analytics.pageVisits}}</p>
  </div>
</template>
<script>
export default {
  middleware ({ store }) {
    store.commit('analytics/increment')
  }
}
</script>
<template>
  <div>
    <h1>Hello Nuxters! 👋
    <span v-if="$nuxt.isOffline">we are offline &#128556</span>
    <span v-if="$nuxt.isOnline">we are online &#128512</span>
    </h1>
    <p>I am rendered on the {{ renderedOn }} side </p>
    <div>
      <p>{{ content }}</p>
    </div>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
export default {
  asyncData () {
   return { content: 'Seconds: ' + new Date().getSeconds(), 
          renderedOn: process.client ? 'client' : 'server' }
  },
  methods: {
    refresh () {
      this.$nuxt.refresh()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  }
}
</script>

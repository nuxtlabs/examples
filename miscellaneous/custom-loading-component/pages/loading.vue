<template>
  <div>
    <h1>Having fun with loaders</h1>
  </div>
</template>
<script>
export default {
  /*
   ** programmatically start the loader so we force the page to take x2seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>

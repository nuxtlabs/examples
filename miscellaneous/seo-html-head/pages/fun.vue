<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Having fun with Nuxt.js'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
      { 
        hid: 'description', 
        name: 'description', 
        content: 'The amazing Nuxt.js application that teaches me all the cool features of Nuxt.js and lots of fun' }
      ],
    }
  }
}
</script>
<style scoped>
h1 {
  font-family: Nunito
}
</style>
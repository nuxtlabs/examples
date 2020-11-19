<template>
  <div>
    <h1>{{ title }} 👋</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello Nuxters!'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The amazing Nuxt application that teaches me all the cool features of Nuxt'
        }
      ]
    }
  }
}
</script>
<style scoped>
h1 {
  font-family: Nunito;
}
</style>

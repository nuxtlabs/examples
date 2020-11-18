<template>
  <div>
    <h1>Nuxt Config</h1>
    <ul v-for="mountain in mountains" :key="mountain.slug">
      <li>{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, $config }) {
    const mountains = await $axios.$get(`/mountains`)
    return { mountains }
  }
}
</script>

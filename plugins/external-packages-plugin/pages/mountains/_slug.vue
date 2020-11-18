<template>
  <div>
    <h1>{{ mountain.title }}</h1>
    <p>{{ mountain.description }}</p>
    <NuxtLink to="/">Back to Mountains</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const mountain = await $axios.$get(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    )
    return { mountain }
  }
}
</script>

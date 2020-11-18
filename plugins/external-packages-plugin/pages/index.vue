<template>
  <div>
    <h1>Plugins External</h1>
    <h2>
      <NuxtLink to="/mountains/x">➡ Click to see redirected post</NuxtLink>
    </h2>
    <ul v-for="mountain in mountains" :key="mountain.slug">
      <li>
        <NuxtLink :to="`mountains/${mountains.slug}`">{{
          mountain.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const mountains = await $axios.$get(`https://api.nuxtjs.dev/mountains`)
    return { mountains }
  }
}
</script>

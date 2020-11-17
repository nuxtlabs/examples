<template>
  <div>
    <h1>Nuxt Config</h1>
    <ul v-for="post in posts" :key="post.id">
      <li>{{post.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
	async asyncData ({ $axios, $config }) {
	    const  posts  = await $axios.$get(`/posts`)
	    return { posts }
	}
}
</script>

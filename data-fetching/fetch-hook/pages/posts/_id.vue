<template>
  <article>
      <h1>{{ post.title }}</h1>
      <p v-if="$fetchState.pending">
        <span class="loading"></span></p>
      <p v-else-if="$fetchState.error">Error while fetching posts 🤬</p>
      <section v-else>   
        <img :src="post.image" :alt="post.title">
        <p>{{ post.description }}</p>
      </section>
      <button @click="goBack">Back</button>
  </article>
</template>
<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  async fetch ({$http, params}) {
    this.post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  },
  methods: {
    goBack(){
      return this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
article {
  width: 600px;
  margin: 0 auto;
}
img{
  height: 200px;
}
p{
  text-align:left;
}
</style>
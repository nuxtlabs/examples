<template>
  <article>
      <h1>{{ post.title }}</h1>
      <section>
        <img :src="post.image" :alt="post.title">
        <p>{{ post.description }}</p>
      </section>
      <button @click="goBack">Back</button>
  </article>
</template>
<script>
export default {
  async asyncData({$http, params}) {
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      return {post}
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
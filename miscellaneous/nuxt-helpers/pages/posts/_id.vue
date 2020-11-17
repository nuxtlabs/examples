<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>
<script>
  export default {
    async asyncData({ params, $http, error }) {
      const id = params.id

      try {
        const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`)
        return { post }
      } catch (e) {
        return error({
          message: 'This post does not exist',
          statusCode: 404,
        })
      }
    },
  }
</script>
<style scoped>
  div {
    margin: 0 auto;
    max-width: 600px;
  }
  p {
    text-align: left;
  }
</style>

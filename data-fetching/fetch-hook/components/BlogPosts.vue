<template>
<div>
    <p v-if="$fetchState.pending">
      <span class="loading"></span></p>
    <p v-else-if="$fetchState.error">Error while fetching posts 🤬</p>
    <ul v-else>
        <li v-for="(post, index) in posts" :key="index.id">
            <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</NuxtLink>
        </li>
    </ul>
    <button @click="$fetch">Refresh Data</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },

  async fetch () {
      this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts') 
  },
}
</script>
<style scoped>
ul {
  list-style: none;
  text-align: left;
  padding: 0 1rem;
}
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
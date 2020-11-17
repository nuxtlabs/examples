<template>
<div>
  <h1>Posts from AsyncData</h1>
    <ul>
        <li v-for="post in posts" :key="post.id">
         <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</NuxtLink>
        </li>  
    </ul>
</div>
</template>
<script>
export default {
  async asyncData({$http}) {
    const posts = await $http.$get('https://api.nuxtjs.dev/posts')
    return { posts };
  },
}
</script>


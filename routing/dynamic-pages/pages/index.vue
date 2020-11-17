<template>
<div>
  <div v-if="$route.query.error === 'param'">Continent or mountain don't exist<button @click="$router.push('/mountains')">X</button></div>
  <ul v-for="mountain in mountains" :key="mountain.id">
    <NuxtLink :to="`${mountain.continent.toLowerCase()}/${mountain.slug}`">
    <li>{{mountain.title}}</li>
    </NuxtLink>
  </ul>
</div>
</template>
<script>
export default {
  async asyncData () {
    const mountains = await fetch("https://api.nuxtjs.dev/mountains")
      .then(res => res.json())

    return { mountains }
    
  }
}
</script>
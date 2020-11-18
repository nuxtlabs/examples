<template>
  <div>
    <h1>Mountains</h1>
    <p>List of mountains coming from our API Plugin:</p>
    <ul v-for="mountain in mountains" :key="mountain.slug">
      <li>
        {{ mountain.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const mountains = await app.$nuxtApi('mountains')
    return { mountains }
  }
}
</script>

<template>
  <article>
    <SocialHead
      :title="mountain.title"
      :description="mountain.description"
      :image="mountain.image"
    />
    <h1>{{ mountain.title }}</h1>
    <section>
      <img :src="mountain.image" :alt="mountain.title" />
      <p>{{ mountain.description }}</p>
    </section>
    <button @click="goBack">Back</button>
  </article>
</template>
<script>
export default {
  async asyncData({ params }) {
    const mountain = await fetch(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    ).then((res) => res.json())
    return { mountain }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  },
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://nuxtjs.org/mountains/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>

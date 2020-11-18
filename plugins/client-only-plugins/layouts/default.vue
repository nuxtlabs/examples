<template>
  <div>
    <TheHeader />
    <main>
      <img src="~/assets/logo.svg" />
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

main {
  margin: 0 auto;
  margin-top: 25vh;
  margin-bottom: 2rem;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}
img {
  margin-bottom: 1rem;
}
</style>

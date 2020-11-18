<template>
  <div :class="[`body-${$store.state.class.bodyClass}`]">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/router-middleware">Router Middleware</NuxtLink>
        </li>
      </ul>
    </nav>
    <main>
      <img src="~/assets/logo.svg" />
      <Nuxt />
    </main>
  </div>
</template>
<style>
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover,
a.nuxt-link-exact-active {
  color: var(--primary-color);
}

main {
  margin: 0 auto;
  margin-top: 25vh;
  margin-bottom: 2rem;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
nav {
  padding: 0 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
  transition: 250ms font-size cubic-bezier(1, 0, 0, 1);
}

.body-index li {
  font-size: 1.2rem;
}

.body-router-middleware li {
  font-size: 3rem;
}
</style>

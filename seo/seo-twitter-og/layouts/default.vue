<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <main>
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
  margin-top: 100px;
  margin-bottom: 2rem;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

nav {
  padding: 0 1rem;
}
nav ul {
  flex-direction: row;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}
button {
  background: var(--primary-color);
  padding: 0.75rem 1.5rem;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  letter-spacing: 0.5px;
  margin: 0 0.5rem;
}

button:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: 0.8;
}
</style>

<template>
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
</template>

<style scoped>
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

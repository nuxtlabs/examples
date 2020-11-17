<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/1">Post</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/54">Error</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin">Admin</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    padding: 0 1rem;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  nav ul li {
    padding: 1rem;
    font-size: 1.2rem;
  }
</style>

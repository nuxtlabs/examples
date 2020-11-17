<template>
  <div :class="[`body-${$store.state.class.bodyClass}`]">
    <TheHeader />
    <main>
      <img src="~/assets/logo.svg" />
      <Nuxt />
    </main>
  </div>
</template>



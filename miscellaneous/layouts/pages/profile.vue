<template>
  <div>
    <section>
      <h1>Profile Page</h1>
      <span>Username</span>
      <address>
        <span>Address</span>
        <span>Country</span>
      </address>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'profile',
}
</script>
<style scoped>
div {
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
span {
  display: block;
}
img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 1rem 0;
}
</style>
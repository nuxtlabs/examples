
<template>
  <div>
    <ProfileHeader/>
      <main>
        <aside></aside>
        <nuxt/>
      </main>
  </div>
</template>

<script>
export default {
  name: 'ProfileLayout'
}
</script>

<style scoped>
div {
  min-height: calc(100vh - (4rem + 2rem));
}

main {
  display: flex;
  margin: 0;
  padding: 0;
  height: 100%;
}

aside {
  background-color: #EDF2F7;
  width: 320px;
}
</style>
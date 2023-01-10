<template>
  <div>
    <h1>Webpack Assets</h1>
    <p>This paragraph is styled using a local font</p>
    <section>
      <div>
        <h2>Image from assets folder</h2>
        <img src="~/assets/mountains-2.jpg" alt="mountains" />
        <p v-pre>src="~/assets/mountains-2.jpg"</p>
      </div>
      <div>
        <h2>Background Image</h2>
        <div class="imgbg"></div>
        <p v-pre>background: url('~assets/mountains.jpg');</p>
      </div>
    </section>
    <h2>Dyanamic Images</h2>
    <p v-pre>:src="require(`~/assets/images/${image}.jpg`)"</p> // can not be use in nuxt 3
    <section>
      <div v-for="image in images" :key="image">
        {{ item }}
        <img :src="require(`~/assets/${image}.jpg`)" alt="mountains" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['mountains-3', 'mountains-4']
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
section div {
  margin: 1rem;
}
img {
  width: 300px;
  height: 200px;
}
.imgbg {
  background: url('~assets/mountains.jpg');
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
}
p {
  font-family: 'DM Sans';
  font-size: 16px;
}
</style>

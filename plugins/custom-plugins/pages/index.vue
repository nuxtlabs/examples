<template>
  <div>
    <h1>Hello Nuxters 👋</h1>

    <p>Type some text and press enter to see it appear below</p>
    <p>Then check the console to see your message</p>
    <input
      type="text"
      @keyup.enter="changeHelloMessage"
      placeholder="Change me"
    />
    <p>Hello: {{ showNewHelloMessage }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$hello('mounted')
  },
  methods: {
    changeHelloMessage(event) {
      this.$store.commit('changeHelloValue', event.target.value)
      event.target.value = ''
    }
  },
  computed: {
    showNewHelloMessage() {
      return this.$store.state.helloMsg
    }
  }
}
</script>

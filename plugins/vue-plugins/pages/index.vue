<template>
    <div>
      <h1>Vue Plugins</h1>
      <button v-tooltip.top-center="msg">Hover me</button>
    </div>
</template>


<script>
export default {
  data(){
    return {
      msg: 'Vue tooltip plugin'
    }
  },
}
</script>
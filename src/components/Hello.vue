<template>
  <div id="container">
    <img src="../assets/logo.png">
    <nav-tab slides="slides" :axios=axios></nav-tab>
  </div>
</template>

<script>
  import NavTab from './Tab'
  export default {
    data () {
      return {
        slides: 'slides',
        axios: 'axios'
      }
    },
    components: {
      NavTab
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>

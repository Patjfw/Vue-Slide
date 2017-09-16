<template>
  <div id="switch-tab">
    <ul>
      <li><router-link to="/">hello</router-link></li>
      <li><router-link :to="slides">{{slides}}</router-link></li>
      <li><router-link to="/axios">{{axios}}</router-link></li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
  li
    display: inline
    text-decoration: none
</style>

<script>
  export default {
    name: 'NavTab',
    props: {
      slides: String,
      axios: {
        default: 'default axios',
        type: String
      }
    }
  }
</script>

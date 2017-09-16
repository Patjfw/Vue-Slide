<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
ul
  margin: 0
  padding: 0

#app
  font-family: 'Helvetica'
  margin: 0
  padding: 0
  display: flex

  a
    text-decoration: none

</style>

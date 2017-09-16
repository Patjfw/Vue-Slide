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
*
  margin: 0
  padding: 0

ul
  list-style: none

  li
    text-decoration: none

#app
  font-family: 'Helvetica'
  display: flex

  a
    text-decoration: none

#container
  flex-grow: 1
  display: flex
  flex-direction: column
  align-items: center
</style>

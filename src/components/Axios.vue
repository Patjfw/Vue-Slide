<template>
  <div>
    <div>{{response}}</div>
    <nav-tab slides="slides"></nav-tab>
  </div>
</template>

<style>

</style>

<script>
  import Vue from 'vue'
  import jsonp from 'vue-jsonp'
  import NavTab from './Tab'

  Vue.use(jsonp)

  export default{
    components: {
      NavTab
    },
    data () {
      return {
        request: {'hell': 'No'},
        response: null
      }
    },
    methods: {
      callback (response) {
        this.response = response
      }
    },
    mounted () {
      this.$jsonp('http://jsfiddle.net/echo/jsonp/', this.request).then(
        json => this.callback(json)
      ).catch(err => {
        console.log(err)
      })
    }
  }
</script>

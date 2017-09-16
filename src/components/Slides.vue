<template>
  <div id="container">
    <div id="slide_wrap">
      <image-group :path=path :imageArr=imageArr></image-group>
      <div id="slide_info">
        123123123
      </div>
      <indices></indices>
    </div>
    <nav-tab slides="slides"></nav-tab>
  </div>
</template>

<script>
  import NavTab from './Tab'
  import ImageGroup from './slides/Images'
  import Indices from './slides/Indices'
  export default{
    data () {
      return {
        path: 'static/',
        imageNames: [
          '480_1.png',
          '480_2.png',
          '480_3.png'
        ]
      }
    },
    computed: {
      imageArr () {
        this.imageNames.splice(this.imageNames.length, 0, this.imageNames[0])
        return this.imageNames
      }
    },
    components: {
      NavTab,
      ImageGroup,
      Indices
    }
  }
</script>

<style lang="sass" scoped>
  #slide_wrap
    width: 480px
    height: 320px
    overflow: hidden
    border: 2px solid #d5d5d5

  #slide_info
    position: relative
    top: -20%
    height: 20%
    background: rgba(247, 247, 247, 0.6)
    z-index: 999
</style>

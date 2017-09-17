<template>
  <div id="container">
    <div id="slide_wrap">
      <image-group :path=path :imageArr=imageArr></image-group>
      <div id="slide_info_wrap">
        <p id="slide_info">{{infoArr[index]}}</p>
      </div>
      <indices :len=imageNames.length-2></indices>
      <buttons></buttons>
    </div>
    <nav-tab slides="slides"></nav-tab>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import NavTab from './Tab'
  import ImageGroup from './slides/Images'
  import Indices from './slides/Indices'
  import Buttons from './slides/Buttons'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      imgSize: {
        width: 480,
        height: 320
      },
      index: 1,
      length: 0,
      playSpeed: 5000
    },
    mutations: {
      updateLength (state, len) {
        state.length = len
      },
      next (state) {
        if (state.index <= state.length) {
          state.index++
        } else {
          state.index = 0
        }
        // console.log('next', state.index)
      },
      prev (state) {
        if (state.index !== 0) {
          state.index--
        } else {
          state.index = state.length - 1
        }
        // console.log('prev', state.index)
      },
      update (state, index) {
        state.index = index
      }
    }
  })

  export default{
    store,
    data () {
      return {
        path: 'static/',
        imageNames: [
          '480_1.png',
          '480_2.png',
          '480_3.png'
        ],
        slideInfo: [
          'first Info',
          'second Info',
          'third Info'
        ]
      }
    },
    computed: {
      imageArr () {
        // 前后分别添加两张辅助图
        let originLength = this.imageNames.length
        this.$store.commit('updateLength', originLength)
        this.imageNames.splice(0, 0, this.imageNames[originLength - 1])
        this.imageNames.splice(originLength + 1, 0, this.imageNames[1])
        return this.imageNames
      },
      infoArr () {
        let originLength = this.slideInfo.length
        this.slideInfo.splice(0, 0, this.slideInfo[originLength - 1])
        this.slideInfo.splice(originLength + 1, 0, this.slideInfo[1])
        return this.slideInfo
      },
      index () {
        return this.$store.state.index
      }
    },
    components: {
      NavTab,
      ImageGroup,
      Indices,
      Buttons
    }
  }
</script>

<style lang="sass" scoped>
  #slide_wrap
    position: relative
    width: 480px
    height: 320px
    overflow: hidden
    border: 2px solid #d5d5d5

  #slide_info_wrap
    position: relative
    top: -20%
    height: 20%
    background: rgba(247, 247, 247, 0.6)
    z-index: 999

  #slide_info
    padding: 10px
</style>

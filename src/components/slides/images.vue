<template>
  <ul id="image_group" :style="{left: pos.left, transition: pos.transition}"
    @transitionend="resetPos($event)">
    <li v-for="img in imageArr">
      <img :src=path+img />
    </li>
  </ul>
</template>

<script>
  import { bus } from '../EventBus.js'
  export default {
    name: 'ImageGroup',
    props: {
      path: String,
      imageArr: Array
    },
    data () {
      return {
        interval: null,
        // 回跳标识
        jumpTo: null,
        playing: false
      }
    },
    computed: {
      pos () {
        let transition

        if (this.jumpTo !== null) {
          transition = 'none'
          this.jumpTo = null
        } else {
          transition = 'all 0.6s ease-out'
        }

        return {
          'left': -(this.$store.state.index * this.$store.state.imgSize['width']) + 'px',
          'transition': transition
        }
      }
    },
    mounted () {
      this.play()
      bus.$on('play', () => {
        this.play()
      })
      bus.$on('suspend', () => {
        this.suspend()
      })
    },
    methods: {
      resetPos (event) {
        if (this.$store.state.index === 0) {
          let tail = this.$store.state.length
          this.jumpTo = tail
          this.$store.commit('update', tail)
          // console.log('start')
        } else if (this.$store.state.index === this.$store.state.length + 1) {
          this.jumpTo = 1
          this.$store.commit('update', 1)
          // console.log('end')
        }
      },
      play () {
        if (!this.playing) {
          this.playing = true
          // console.log('play')
          this.interval = setInterval(
            () => {
              this.$store.commit('next')
            }, this.$store.state.playSpeed
          )
        }
      },
      suspend () {
        // console.log('suspend')
        clearInterval(this.interval)
        this.playing = false
        this.interval = null
      }
    }
  }
</script>

<style lang="sass" scoped>
  #image_group
    display: flex
    position: relative
    flex-flow: row nowrap
  li
</style>

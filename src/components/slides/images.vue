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
        jumpTo: null
      }
    },
    computed: {
      pos () {
        let transition

        if (this.jumpTo !== null) {
          transition = 'none'
          this.jumpTo = null
        } else {
          transition = 'all 1.2s ease-out'
        }

        return {
          'left': -((this.$store.state.index) * 480) + 'px',
          'transition': transition
        }
      }
    },
    mounted () {
      this.play()
    },

    beforeDestroy () {
      this.destroy()
    },
    methods: {
      resetPos (event) {
        if (event.target.offsetLeft >= 0) {
          let tail = this.$store.state.length - 2
          this.jumpTo = tail
          this.$store.commit('update', tail)
          // console.log('start')
        } else if (event.target.offsetLeft <=
          -this.$store.state.imgSize['width'] * (this.$store.state.length + 1)) {
          this.jumpTo = 1
          this.$store.commit('update', 1)
          // console.log('end')
        }
        bus.$emit('transitionend')
      },
      play () {
        this.interval = setInterval(
          () => {
            this.$store.commit('next')
          }, this.$store.state.playSpeed
        )
      },
      destroy () {
        this.interval = null
      },
      jump () {

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

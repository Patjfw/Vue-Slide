<template>
  <div id="indices">
    <ul>
      <li v-for="n in len" :key="n" :ref="'item'+n" :class="{'active': n === imgIndex}" @click="jump(n)">
        <!-- <a href="#"></a> -->
      </li>
    </ul>
  </div>
</template>

<script>
  // import { bus } from '../EventBus.js'
  export default {
    name: 'Indices',
    props: {
      len: Number
    },
    computed: {
      imgIndex () {
        if (this.$store.state.index < 1) {
          return this.$store.state.length - 2
        } else if (this.$store.state.index > this.$store.state.length) {
          return 1
        }
        return this.$store.state.index
      }
    },
    methods: {
      jump (index) {
        console.log(index)
        this.$store.commit('update', index)
      }
    }
  }
</script>

<style lang="sass" scoped>
  $index_color: rgba(247, 247, 247, 0.6)
  $index_color_hover: rgba(20, 20, 20, 0.6)
  $index_color_active: rgba(255, 69, 0, 0.8)

  #indices
    position: relative
    top: -45%
    z-index: 2

    ul
      margin: 0 auto
      display: flex
      justify-content: center

      li
        display: inline
        margin: 0 10px
        width: 10px
        height: 10px
        border: 1px solid black
        border-radius: 10px
        background: $index_color

        &:hover
          background: $index_color_hover

        &.active
          background: $index_color_active
</style>

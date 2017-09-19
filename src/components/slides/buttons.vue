<template>
  <div id="buttons_wrap">
    <div><span class="btn_triangle left" @click="prev"></span></div>
    <div><span class="btn_triangle right" @click="next"></span></div>
  </div>
</template>

<script>
  export default{
    name: 'Buttons',
    methods: {
      prev () {
        this.$store.commit('prev')
      },
      next () {
        this.$store.commit('next')
      }
    }
  }
</script>

<style lang="sass" scoped>
  $button_color: rgba(255, 255, 255, 0.8)
  $button_color_hover: rgba(255, 69, 0, 0.8)

  #buttons_wrap
    position: absolute
    width: 100%
    top: 50%
    z-index: 3

  a
    background: rgba(0, 0, 0, 0.2)

  .btn_triangle
    margin: -10px 10px
    width: 20px
    height: 20px
    background: rgba(0, 0, 0, 0)
    border-left: 2px solid #000
    border-top: 2px solid #000

  .left
    float: left
    transform: rotate(-45deg)

  .right
    float: right
    transform: rotate(135deg)

  // &:hover
  //   border-color: transparent $button_color_hover transparent transparent


  //
  //   &:hover
  //     border-color: transparent transparent transparent $button_color_hover

</style>

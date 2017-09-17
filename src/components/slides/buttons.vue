<template>
  <div id="buttons_wrap">
    <div class="btn_triangle left"></div>
    <div class="btn_triangle right"></div>
  </div>
</template>

<script>
  export default{
    name: 'Buttons'
  }
</script>

<style lang="sass" scoped>
  $button_color: rgba(255, 255, 255, 0.8)
  $button_color_hover: rgba(255, 69, 0, 0.8)

  #buttons_wrap
    display: flex
    justify-content: space-between
    position: absolute
    width: 100%
    top: 120px
    z-index: 3

  .btn_triangle
    display: flex
    width: 0
    height: 0
    border-width: 30px
    border-style: solid

  .left
    border-color: transparent $button_color transparent transparent

    &:hover
      border-color: transparent $button_color_hover transparent transparent

  .right
    border-color: transparent transparent transparent $button_color

    &:hover
      border-color: transparent transparent transparent $button_color_hover

</style>

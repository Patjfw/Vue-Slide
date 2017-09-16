<template>
  <ul id="image_group">
    <li v-for="img in imageArr">
      <img :src=path+img />
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ImageGroup',
    props: {
      path: String,
      imageArr: Array
    }
  }
</script>

<style lang="sass" scoped>
  #image_group
    display: flex
    flex-flow: row nowrap
  li
</style>

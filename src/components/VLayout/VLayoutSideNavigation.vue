<template lang="pug">
  div
    ul
      li(v-for="option in options")
       router-link(:to="option.path")
        | {{ option.label }}
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        default: [{
          label: '',
          path: ''
        }]
      }
    }
  }
</script>

<style>

</style>
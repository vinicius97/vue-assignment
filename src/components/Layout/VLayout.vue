<template lang="pug">
  div
    v-header
    div
      slot
    v-footer
</template>  

<script>
import VHeader from './VHeader.vue'
import VFooter from './VFooter.vue'

export default {
  components: {
    VFooter,
    VHeader
  }
}
</script>

<style>

</style>
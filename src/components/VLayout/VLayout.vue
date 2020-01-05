<template lang="pug">
  div
    v-header
    v-sidebar
    div
      slot
    v-footer
</template>  

<script>
import VFooter from './VFooter.vue'
import VHeader from './VHeader.vue'
import VSidebar from './VSidebar.vue'

export default {
  components: {
    VFooter,
    VHeader,
    VSidebar
  }
}
</script>

<style>

</style>
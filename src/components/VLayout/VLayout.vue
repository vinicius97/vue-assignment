<template lang="pug">
  div
    v-header
    v-sidebar
    div
      slot
    v-footer
</template>  

<script>
import VFooter from './VLayoutFooter.vue'
import VHeader from './VLayoutHeader.vue'
import VSidebar from './VLayoutSidebar.vue'

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
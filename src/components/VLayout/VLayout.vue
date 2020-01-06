<template lang="pug">
  div
    v-header
    v-sidebar(:navigation-options="navigationOptions")
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
  },
  props: {
    navigationOptions: Array
  }
}
</script>

<style>

</style>
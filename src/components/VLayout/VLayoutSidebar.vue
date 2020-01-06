<template lang='pug'>
  div
    v-layout-breadcrumb
    v-layout-side-navigation(:options="navigationOptions")
</template>

<script>
import VLayoutBreadcrumb from './VLayoutBreadcrumb.vue'
import VLayoutSideNavigation from './VLayoutSideNavigation.vue'
export default {
  components:  {
    VLayoutBreadcrumb,
    VLayoutSideNavigation
  },
  props: {
    navigationOptions: Array
  }
}
</script>

<style>

</style>
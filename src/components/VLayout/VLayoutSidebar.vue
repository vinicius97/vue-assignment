<template lang='pug'>
  div
    v-layout-breadcrumb
    v-layout-side-navigation
</template>

<script>
import VLayoutBreadcrumb from './VLayoutBreadcrumb.vue'
import VLayoutSideNavigation from './VLayoutSideNavigation.vue'
export default {
  components:  {
    VLayoutBreadcrumb,
    VLayoutSideNavigation
  }
}
</script>

<style>

</style>
<template lang="pug">
  .v-layout-sidebar
    v-layout-side-navigation(:options="navigationOptions")
</template>

<script>
import VLayoutSideNavigation from "./VLayoutSideNavigation.vue";

export default {
  components: {
    VLayoutSideNavigation
  },
  props: {
    navigationOptions: Array
  }
};
</script>

<style lang="scss">
.v-layout-sidebar {
  margin-right: 20px;
}
</style>

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
  display: flex;
  margin: 40px;
}
</style>

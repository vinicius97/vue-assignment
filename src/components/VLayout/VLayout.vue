<template lang="pug">
  .v-layout
    v-layout-header
    v-layout-breadcrumb
    .v-layout__body
      v-layout-sidebar(:navigation-options="navigationOptions")
      slot
    v-layout-footer
</template>

<script>
import VLayoutFooter from "./VLayoutFooter.vue";
import VLayoutHeader from "./VLayoutHeader.vue";
import VLayoutSidebar from "./VLayoutSidebar.vue";
import VLayoutBreadcrumb from './VLayoutBreadcrumb.vue'

export default {
  components: {
    VLayoutFooter,
    VLayoutHeader,
    VLayoutSidebar,
    VLayoutBreadcrumb
  },
  props: {
    navigationOptions: Array
  }
};
</script>

<style lang="scss" scoped>
.v-layout {
  display: flex;
  flex-direction: column;

  &__body {
    display: flex;
    flex-direction: row;
  }
}
</style>

<template lang="pug">
  .v-layout
    v-layout-header
    .v-layout__container
      .v-layout__sub-header
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
  background: #e7e9f3;
  height: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    max-width: 1200px;
    margin: auto;
  }

  &__body {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  &__sub-header {
    display: flex;
    width: 100%;
    height: 80px;
  }
}
</style>

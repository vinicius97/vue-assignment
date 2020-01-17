<template lang="pug">
  div(:class='layoutClass')
    v-layout-header
    .v-layout__scrollable-area
      .v-layout__container
        .v-layout__sub-header
          v-layout-breadcrumb
        .v-layout__body
          v-layout-sidebar(:navigation-options="navigationOptions")
          slot
      v-layout-footer
</template>

<script>
// Components
import VLayoutFooter from "./VLayoutFooter.vue";
import VLayoutHeader from "./VLayoutHeader.vue";
import VLayoutSidebar from "./VLayoutSidebar.vue";
import VLayoutBreadcrumb from "./VLayoutBreadcrumb.vue";

export default {
  components: {
    VLayoutFooter,
    VLayoutHeader,
    VLayoutSidebar,
    VLayoutBreadcrumb
  },
  props: {
    navigationOptions: Array
  },
  data: function() {
    return {
      layoutClass: 'v-layout'
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme
    }
  },
  methods: {
    handleLayoutClassTheme() {
      if(this.$route.name === 'company-data') {
        this.$store.commit('changeTheme', 'light')
      } else {
        this.$store.commit('changeTheme', 'dark')
      }
      
      this.layoutClass =  `v-layout v-layout--${this.theme}`
    }
  },
  watch: {
    $route: function() {
      this.handleLayoutClassTheme();
    }
  },
  created: function() {
    this.handleLayoutClassTheme()
  }
};
</script>

<style lang="scss" scoped>
.v-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &--light {
    background: #ffffff;
  }

  &--dark {
    background: #e7e9f3;
  }

  &__scrollable-area {
    overflow-y: auto;
    flex-direction: column;
    min-height: 100%;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100% - 180px);
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

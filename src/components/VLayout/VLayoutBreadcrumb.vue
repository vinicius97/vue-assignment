<template lang="pug">
  .bread
    .bread__cumb(v-for="breadcrumb in breadcrumbs")
      router-link.bread__cumb__link(:to="breadcrumb.path") {{ breadcrumb.label }}
</template>

<script>
export default {
  data: function() {
    return {
      breadcrumbs: []
    };
  },
  watch: {
    $route: function() {
      this.loadBreandcrumbs();
    }
  },
  methods: {
    loadBreandcrumbs() {
      const routeBreadCrumbs = this.$route.meta && this.$route.meta.breadcrumb;
      this.breadcrumbs = routeBreadCrumbs ? routeBreadCrumbs : [];
    }
  },
  created: function() {
    this.loadBreandcrumbs();
  }
};
</script>

<style lang="scss" scoped>
.bread {
  display: flex;
  align-items: center;
  
  &__cumb {
    margin-right: 10px;

    &:before {
      content: "/";
      margin-right: 10px;
    }

    &:first-child::before {
      content: "";
    }

    &__link {
      text-transform: uppercase;
      font-size: 12px;
      text-decoration: none;
      color: var(--primary-color);
    }
  }
}
</style>

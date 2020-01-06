<template lang="pug">
  div
    span(v-for="breadcrumb in breadcrumbs")
      router-link(:to="breadcrumb.path") {{ breadcrumb.label }}
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
      this.loadBreandcrumbs()
    }
  },
  methods: {
    loadBreandcrumbs() {
      const routeBreadCrumbs = this.$route.meta && this.$route.meta.breadcrumb;
      this.breadcrumbs = routeBreadCrumbs ? routeBreadCrumbs : []
    }
  },
  created: function() {
    this.loadBreandcrumbs()
  }
};
</script>

<template lang="pug">
  div
    span(v-for="breadcrumb in breadcrumbs")
      router-link(:to="breadcrumb.path")
        | {{ breadcrumb.label }}
</template>

<script>
export default {
  data: function() {
    return {
      breadcrumbs: []
    };
  },
  created: function() {
    const routeBreadCrumbs = this.$route.meta && this.$route.meta.breadcrumb;
    this.breadcrumbs = routeBreadCrumbs ? routeBreadCrumbs : [];
  }
};
</script>

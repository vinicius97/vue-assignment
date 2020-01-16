<template lang="pug">
  .v-layout-side-navigation
    ul.v-layout-side-navigation__list
      li.v-layout-side-navigation__list__item(v-for="option in options")
       div.v-layout-side-navigation__list__item__indicator(v-if="checkActiveLink(option)")
       router-link.v-layout-side-navigation__list__item__link(:to="option.path")
        | {{ option.label }}
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [
        {
          name: "",
          label: "",
          path: ""
        }
      ]
    }
  },
  data: function() {
    return {
      actualRoute: {}
    };
  },
  watch: {
    $route: function() {
      this.updateActualRoute();
    }
  },
  methods: {
    updateActualRoute() {
      this.actualRoute = this.$route;
    },
    checkActiveLink(option) {
      return this.actualRoute.name === option.name;
    }
  },
  created: function() {
    this.updateActualRoute();
  }
};
</script>

<style lang="scss">
.v-layout-side-navigation {
  border: 1px solid var(--border-color);
  border-radius: 5px;
  width: 300px;
  background: #ffffff;

  &__list {
    padding: 0px;
    margin: 0;

    &__item {
      display: flex;
      height: 65px;
      border-bottom: 1px solid var(--border-color);
      text-decoration: none;
      list-style: none;

      &:last-child {
        border-bottom: none;
      }

      &__indicator {
        width: 2px;
        height: 100%;
        background-color: var(--primary-color);
      }

      &__link {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
}
</style>

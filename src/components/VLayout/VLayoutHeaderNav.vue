<template lang="pug">
  nav.v-layout-header__nav
    ul.v-layout-header__nav__ul(v-for="item in list")
      li.v-layout-header__nav__ul__li {{ item.label }}
</template>

<script>
export default {
  data: function() {
    return {
      list: [{ label: "Prospect" }, { label: "Alert" }, { label: "Learn" }]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-layout-header {
  &__nav {
    display: flex;

    &__ul {
      display: flex;

      &__li {
        list-style: none;
        margin: 5px;
        color: #ffffff;
        text-transform: uppercase;
        font-size: 14px;
        margin-right: 30px;
      }
    }
  }
}
</style>

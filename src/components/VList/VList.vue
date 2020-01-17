<template lang="pug">
.v-list
  .v-list__item(v-for='item in list')
    .v-list__item__logo
      img(:src='item.logo')
    .v-list__item__text
      .v-list__item__text__title
        | {{ item.title }}
      .v-list__item__text__description
        | {{ item.description }}
</template>

<script>
export default {
  props: {
    list: Array
  }
};
</script>

<style lang="scss" scoped>
.v-list {
  display: flex;
  flex-direction: column;
  margin: -15px;

  &__item {
    display: flex;
    width: 100%;
    height: 35px;
    padding: 25px 15px;

    &__text {
      &__logo {
        flex-grow: 2;
        font-size: 14px;
        flex-basis: 120px;
      }

      &__title {
        font-weight: bold;
      }

      &__description {
        flex-grow: 3;
        display: flex;
        margin-right: 15px;
      }
    }
  }
}
</style>

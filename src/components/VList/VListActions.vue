<template lang="pug">
.v-list
  .v-list__item(v-for='item in list')
    .v-list__item__time
      | {{ item.when }}
    .v-list__item__description
      .v-list__item__description__icon
        img(:src='item.icon')
      .v-list__item__description__action
        | {{ item.from }} {{ item.action }} {{ item.to }} on {{ item.where }}
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
    border-bottom: 1px solid var(--border-color);
    
    &__time {
      flex-grow: 2;
      font-size: 14px;
      flex-basis: 120px;
    }

    &__description {
      flex-grow: 3;
      display: flex;
      margin-right: 15px;

      &__icon {
        flex-basis: 25px;
        flex-shrink: 0;
        padding: 0 10px;
      }

      &__action {
        width: 100%;
      }
    }
  }
}
</style>

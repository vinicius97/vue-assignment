<template lang="pug">
  div.v-container
    div.v-container__header
      slot(name='header')
    div.v-container__body
      slot
</template>

<style lang="scss" scoped>
  .v-container {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    width: 100%;
    padding: 20px;

    &__header {
      border-bottom: 1px solid;

      &:empty {
        display: none;
      }
    }

    &__body {
      padding: 25px;
    }
  }
</style>

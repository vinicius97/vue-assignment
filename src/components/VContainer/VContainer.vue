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
    border: 1px solid;

    &__header {
      border-bottom: 1px solid;
    }

    &__body {
      padding: 25px;
    }
  }
</style>

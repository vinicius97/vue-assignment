<template lang="pug">
  .v-card
    .v-card__header
      slot(name='header')
    .v-card__body
      slot
</template>

<style lang="scss">
.v-card {
  border: 1px solid #dedede;
  background: white;
  border-radius: 3px;
  margin: 0 15px 15px 0px;
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 43%;

  &__header {
    border-bottom: 1px solid #dedede;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    padding: 15px;
  }

  &__body {
    padding: 15px;
  }
}
</style>
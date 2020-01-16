<template lang="pug">
  div(:class='handleContainerClass()')
    div.v-container__header
      slot(name='header')
    div.v-container__body
      slot
</template>

<script>
export default {
  props: {
    withoutBorder: Boolean
  },
  methods: {
    handleContainerClass () {
      return this.withoutBorder ? 'v-container v-container--without-border' : 'v-container'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-container {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    width: 100%;
    background: #ffffff;

    &--without-border {
      border: none;
      background: none;
    }

    &__header {
      border-bottom: 1px solid;

      &:empty {
        display: none;
      }
    }

    &__body {
      padding: 20px;
    }
  }
</style>

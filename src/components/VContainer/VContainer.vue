<template lang="pug">
  div.v-container
    div.v-container__header
      slot(name='header')
    div.v-container__body
      slot
</template>

<style lang="scss" src="./VContainer.scss" scoped></style>

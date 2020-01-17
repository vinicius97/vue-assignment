<template lang="pug">
  button.btn.btn--primary(@click="$emit('click')")
    slot
</template>

<style lang="scss" scoped>
.btn {
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #1f2b5a;
  padding: 10px 25px;
  text-transform: uppercase;
  outline: #5d699a;

  &--primary {
    background-color: #5d699a;
    color: #ffffff;
  }
}
</style>

<template lang="pug">
  div
    .header__search
      input(type="text" class="header__search__input")
    span.header__or
      | OR
    v-form-button New Smartlist
</template>

<script>
import VFormButton from "Components/VForm/VFormButton.vue";

export default {
  components: {
    VFormButton
  }
};
</script>

<style lang="scss" scoped>
.header {
  &__logo {
    width: 40px;
    height: 40px;
    margin: 0 40px;
  }

  &__search {
    &__input {
      height: 40px;
      border-radius: 5px;
      border: none;
      background-color: #1f2b5a;
      outline: #5d699a;
      color: #ffffff;
      padding: 0 25px;
    }
  }

  &__or {
    display: flex;
    height: 100%;
    margin: 20px;
    align-items: center;
    color: white;
  }
}
</style>

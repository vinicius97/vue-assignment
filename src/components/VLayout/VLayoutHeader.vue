<template lang="pug">
  header.v-layout-header
    .v-layout-header__container
      .v-layout-header__logo
        img(:src="require('Images/logo-pink.svg')", alt="Intricately")
      .v-layout-header__search
        input.v-layout-header__search__input(type="text")
      .v-layout-header__or
        | OR
      button.btn.btn--primary
        | New Smartlist
      v-header-nav
      span Chrome
      div.v-layout-header__user-options(role="button") Usuário
</template>

<script>
import Vue from "vue";
import VHeaderNav from "Components/VLayout/VLayoutHeaderNav.vue";
import VHeaderSmartlistActions from "Components/VLayout/VLayoutHeaderSmartlistActions.vue";

export default {
  components: {
    VHeaderNav,
    VHeaderSmartlistActions
  }
};
</script>

<style lang="scss" scoped>
.v-layout-header {
  background-color: #394783;
  width: 100%;
  max-height: 70px;
  display: flex;
  align-items: center;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1220px;
    width: 100%;
    height: 70px;
    margin: auto;
  }

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

  &__browser {
  }

  &__user-options {
    justify-self: flex-end;
  }
}

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

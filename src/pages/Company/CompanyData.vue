<template lang="pug">
  v-container
    .company-input__size--50
      v-form-input-field(
        label='Company Name'
      )
    .company-input__size--50
      v-form-input-field-money(
        label='Company Spend'
        placeholder='e.g. $150,000 - $330,000', 
      )
    .company-input__size--50
      v-form-input-field-money-range(
        label='Company Spend Ability'
        placeholder='e.g. $150,000 - $330,000', 
      )
    .company-input__size--100
      v-form-text-area(
        label='Notes'
      )
</template>

<script>
import VContainer from "Components/VContainer/VContainer.vue";
import VFormInputField from "Components/VForm/VFormInputField.vue";
import VFormInputFieldMoney from "Components/VForm/VFormInputFieldMoney.vue";
import VFormInputFieldMoneyRange from "Components/VForm/VFormInputFieldMoneyRange.vue";
import VFormTextArea from "Components/VForm/VFormTextArea.vue";

export default {
  components: {
    VContainer,
    VFormInputField,
    VFormInputFieldMoney,
    VFormInputFieldMoneyRange,
    VFormTextArea
  }
};
</script>

<style lang="scss" scoped>
  .company-input {
    &__size {
      &--50 {
        width: 50%;
        flex-shrink: 0;
        flex-basis: 50%;
      }

      &--100 {
        width: 100%;
        flex-shrink: 0;
        flex-basis: 100%;
      }
    }
  }
</style>
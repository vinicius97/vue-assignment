<template lang="pug">
  v-container
    template(slot='header')
      | Company data
    template
      v-form-group
        v-form-input-field(
          label='Company Name'
        )
      v-form-group
        v-form-input-field-money(
          label='Company Spend'
          placeholder='e.g. $150,000 - $330,000', 
        )
      v-form-group
        v-form-input-field-money-range(
          label='Company Spend Ability'
          placeholder='e.g. $150,000 - $330,000', 
        )
      v-form-group
        v-form-text-area(
          label='Notes' 
        )
</template>

<script>
import VContainer from "Components/VContainer/VContainer.vue";
import VFormGroup from "Components/VForm/VFormGroup.vue";
import VFormInputField from "Components/VForm/VFormInputField.vue";
import VFormInputFieldMoney from "Components/VForm/VFormInputFieldMoney.vue";
import VFormInputFieldMoneyRange from "Components/VForm/VFormInputFieldMoneyRange.vue";
import VFormTextArea from "Components/VForm/VFormTextArea.vue";

export default {
  components: {
    VContainer,
    VFormGroup,
    VFormInputField,
    VFormInputFieldMoney,
    VFormInputFieldMoneyRange,
    VFormTextArea,
  }
};
</script>

<template lang="pug">
  v-layout
    v-container
      template(slot='header')
        | Company data
      template
        v-form-group
          v-input-field(
            name='company-name'
          )
        v-form-group
          v-input-field-money(
            name='company-spend'
          )
        v-form-group
          v-input-field-money-range(
            placeholder='e.g. $150,000 - $330,000', 
            name='company-spend-ability'
          )
        v-form-group
          v-text-area(
            name='company-notes'
          )
</template>

<script>
import VLayout from "Components/VLayout/VLayout.vue";
import VContainer from "Components/VContainer/VContainer.vue";
import VFormGroup from "Components/VForm/VFormGroup.vue";
import VInputField from "Components/VForm/VInputField.vue";
import VInputFieldMoney from "Components/VForm/VInputFieldMoney.vue";
import VInputFieldMoneyRange from "Components/VForm/VInputFieldMoneyRange.vue";
import VTextArea from "Components/VForm/VTextArea.vue";

export default {
  components: {
    VContainer,
    VFormGroup,
    VInputField,
    VInputFieldMoney,
    VInputFieldMoneyRange,
    VLayout,
    VTextArea
  }
};
</script>

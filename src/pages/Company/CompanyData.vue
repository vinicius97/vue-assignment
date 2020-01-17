<template lang="pug">
  v-container
    v-modal(@close="handleCloseModal", @save="handleSaveModal", :show='showModal')
      | Modal etc e tal
    .company-description
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    .company-input__size--50
      v-form-input-field(
        label='Company Name'
      )
    .company-input__size--50
      v-form-input-field-money(
        label='Company Spend'
        placeholder='e.g. $150,000', 
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
    v-form-button(@click='handleShowModal') Additional notes
</template>

<script>
import VContainer from "Components/VContainer/VContainer.vue";
import VFormButton from 'Components/VForm/VFormButton.vue'
import VFormInputField from "Components/VForm/VFormInputField.vue";
import VFormInputFieldMoney from "Components/VForm/VFormInputFieldMoney.vue";
import VFormInputFieldMoneyRange from "Components/VForm/VFormInputFieldMoneyRange.vue";
import VFormTextArea from "Components/VForm/VFormTextArea.vue";
import VModal from "Components/VModal/VModal.vue";

export default {
  components: {
    VContainer,
    VFormButton,
    VFormInputField,
    VFormInputFieldMoney,
    VFormInputFieldMoneyRange,
    VFormTextArea,
    VModal
  },
  data: function() {
    return {
      showModal: false
    }
  },
  methods: {
    handleCloseModal() {
      this.handleShowModal()
    },
    handleSaveModal() {
      this.handleShowModal()
    },
    handleShowModal() {
      this.showModal = !this.showModal
    }
  }
};
</script>

<style lang="scss" scoped>
.company-description {
  margin-bottom: 15px;
}
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

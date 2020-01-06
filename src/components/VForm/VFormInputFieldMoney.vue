<template lang="pug">
  v-form-input-field(
    :label="label"
    :placeholder="placeholder",
    :validator="validateInputValue"
    @keypress="isNumerical($event)"
  )
</template>

<script>
import ErrorMessages from '../../constants/ErrorMessages'
import VFormInputField from "./VFormInputField.vue";

export default {
  components: {
    VFormInputField
  },
  props: {
    label: String,
    placeholder: String
  },
  data: function() {
    return {
      error: null
    };
  },
  methods: {
    isNumerical(event) {
      const accepetedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      const isAcceptable = accepetedKeys.find(key => key === event.key);

      if (!isAcceptable) {
        event.preventDefault();
      }
    },
    validateInputValue(value) {
      if (value === "") {
        return { message: 'Error' };
      }

      return null
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 35px;
}
</style>

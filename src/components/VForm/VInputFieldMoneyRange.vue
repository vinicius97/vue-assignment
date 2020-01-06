<template lang="pug">
  v-input-field(
    :placeholder="placeholder",
    :validator="validateInputValue"
    @keypress="isNumerical($event)"
  )
</template>

<script>
import ErrorMessages from '../../constants/ErrorMessages'
import VInputField from "./VInputField.vue";

export default {
  components: {
    VInputField
  },
  props: {
    name: String,
    placeholder: String
  },
  data: function() {
    return {
      minimumValue: null,
      maximumValue: null,
      error: null
    };
  },
  methods: {
    isNumerical(event) {
      const accepetedKeys = [
        "-",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ];
      const isAcceptable = accepetedKeys.find(key => key === event.key);

      if (!isAcceptable) {
        event.preventDefault();
      }
    },
    validateInputValue (val) {
      const [minValue, maxValue] = val.split("-");

      this.minimumValue = Number(minValue);
      this.maximumValue = Number(maxValue);

      if (val === "") {
        return { message: ErrorMessages.THIS_FIELD_CANNOT_BE_EMPTY };
      }

      if (parseInt(minValue) > parseInt(maxValue)) {
        return {
          message: ErrorMessages.MAX_VALUE_CANNOT_BE_LESS_THAN_MIN_VALUE
        };
      }

      return
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 35px;
}
</style>

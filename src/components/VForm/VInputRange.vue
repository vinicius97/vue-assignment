<template lang="pug">
  div
    input(v-model.trim="rangeValue", @keypress='isNumerical($event)', :placeholder='placeholder')
    div(v-if='error')
      | {{ error.message }}
</template>

<script>
import ErrorMessages from "../../constants/ErrorMessages.js";

export default {
  props: {
    placeholder: String
  },
  data: function() {
    return {
      rangeValue: "",
      minimumValue: null,
      maximumValue: null,
      error: null
    };
  },
  watch: {
    rangeValue: function(val, oldVal) {
      const [minValue, maxValue] = val.split("-");

      this.minimumValue = Number(minValue);
      this.maximumValue = Number(maxValue);

      if (val === "") {
        this.error = { message: ErrorMessages.THIS_FIELD_CANNOT_BE_EMPTY };
        return;
      }

      if (parseInt(minValue) > parseInt(maxValue)) {
        this.error = {
          message: ErrorMessages.MAX_VALUE_CANNOT_BE_LESS_THAN_MIN_VALUE
        };
      } else {
        this.error = null;
      }
    }
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
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 35px;
}
</style>

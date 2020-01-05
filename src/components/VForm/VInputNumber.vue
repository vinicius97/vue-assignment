<template lang="pug">
  div
    input(v-model.trim="numberValue", @keypress='isNumerical($event)', :placeholder='placeholder')
    div(v-if='error')
      | {{ error.message }}
</template>

<script>
import ErrorMessages from "../../constants/ErrorMessages";

export default {
  props: {
    placeholder: String
  },
  data: function() {
    return {
      numberValue: "",
      error: null
    };
  },
  watch: {
    numberValue: function(val, oldVal) {
      if (val === "") {
        this.error = { message: ErrorMessages.THIS_FIELD_CANNOT_BE_EMPTY };
      } else {
        this.error = null;
      }
    }
  },
  methods: {
    isNumerical(event) {
      const accepetedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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

<template lang="pug">
  v-form-group
    label {{ label }}
    textarea(v-model.trim="textValue", :placeholder='placeholder')
    div(v-if='error')
      | {{ error.message }}
</template>

<script>
import ErrorMessages from "../../constants/ErrorMessages.js";
import VFormGroup from "Components/VForm/VFormGroup.vue";

export default {
  components: {
    VFormGroup
  },
  props: {
    label: String,
    placeholder: String
  },
  data: function() {
    return {
      textValue: "",
      error: null
    };
  },
  watch: {
    textValue: function(val, oldVal) {
      this.checkForValue(val);
    }
  },
  methods: {
    checkForValue(value) {
      if (value === "") {
        this.error = {
          message: ErrorMessages.THIS_FIELD_CANNOT_BE_EMPTY
        };
      } else {
        this.error = null;
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

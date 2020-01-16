<template lang="pug">
  v-form-group
    label {{ label }}
    input(
      v-model.trim="inputValue", 
      :name="name"
      :placeholder="placeholder"
      @keypress="$emit('keypress', $event)"
    )
    div(v-if='error && error.message')
      | {{ error.message }}
</template>

<script>
import VFormGroup from "Components/VForm/VFormGroup.vue";

export default {
  components: {
    VFormGroup
  },
  props: {
    label: String,
    name: String,
    placeholder: String,
    value: String,
    validator: {
      type: Function,
      default: () => ({
        message: null
      })
    }
  },
  data: function() {
    return {
      inputValue: "",
      error: null
    };
  },
  watch: {
    inputValue: function(val, oldVal) {
      this.error = this.validator(val);
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 35px;
}
</style>

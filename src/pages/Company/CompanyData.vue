<template lang="pug">
  v-layout
    v-container
      template(slot='header')
        | Company data
      template
        v-form-group
          v-input-text
        v-form-group
          v-input-number
        v-form-group
          v-input-range(placeholder='teste')
        v-form-group
          v-text-area
</template>

<script>
import VLayout from "Components/VLayout/VLayout.vue";
import VContainer from "Components/VContainer/VContainer.vue";
import VFormGroup from "Components/VForm/VFormGroup.vue";
import VInputText from "Components/VForm/VInputText.vue";
import VInputNumber from "Components/VForm/VInputNumber.vue";
import VInputRange from "Components/VForm/VInputRange.vue";
import VTextArea from "Components/VForm/VTextArea.vue";

export default {
  components: {
    VContainer,
    VFormGroup,
    VInputNumber,
    VInputRange,
    VInputText,
    VLayout,
    VTextArea
  }
};
</script>

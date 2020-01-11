<template lang="pug">
  v-container
    v-company-resume
    v-card
      template(slot='header') Activities
      template Body
    v-card
      template(slot='header') Similar Companies
      template Body
    v-card
      template(slot='header') Company Spend History
      template Body
    v-card
      template(slot='header') Company Spend History
      template Body
</template>

<script>
import VCard from 'Components/VCard/VCard.vue'
import VCompanyResume from 'Components/VCompanyResume/VCompanyResume.vue'
import VContainer from "Components/VContainer/VContainer.vue";
export default {
  components: {
    VCard,
    VCompanyResume,
    VContainer
  }
}
</script>
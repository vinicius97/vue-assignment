<template lang="pug">
  div
    v-company-resume
    v-card
    v-card
    v-card
</template>

<script>
import VCard from 'Components/VCard/VCard.vue'
import VCompanyResume from 'Components/VCompanyResume/VCompanyResume.vue'

export default {
  components: {
    VCard,
    VCompanyResume
  }
}
</script>
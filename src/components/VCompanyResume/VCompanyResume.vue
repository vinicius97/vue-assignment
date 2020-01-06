<template lang="pug">
  .v-company-resume
    .v-company-resume__header
      .v-company-resume__header__logo
        img(:src="company.logo")
      .v-company-resume__header__name
        | {{ company.name }}
      .v-company-resume__header__address
        | {{ company.address }}
    .v-company-resume__description
      | {{ company.description }}
</template>

<script>
export default {
  props: {
    company: {
      type: Object,
      default: function() {
        return {
          logo: "",
          name: "",
          address: "",
          description: ""
        };
      }
    }
  }
};
</script>

<template lang="pug">
  v-container(withoutBorder=true)
    .company__page
      .company__page__row
        v-card-company(:company='company')
      .company__page__column--a
        v-card
          template(slot='header') Activities
          template
            v-list-actions(:list='activitiesList')
      .company__page__column--b
        v-card
          template(slot='header') Similar Companies
          template 
            VList(:list='similarCompanies')
        v-card
          template(slot='header') Company Spend History
          template Body
        v-card
          template(slot='header') Company Spend History
          template
            VList(:list='spendStory')
</template>

<script>
// Components
import VCard from 'Components/VCard/VCard.vue'
import VCardCompany from 'Components/VCard/VCardCompany.vue'
import VList from 'Components/VList/VList.vue'
import VListActions from 'Components/VList/VListActions.vue'
import VContainer from "Components/VContainer/VContainer.vue";

// Mocks
import MockedActivities from '../../__mocks__/CompanyActivites.js'
import MockedSimilarCompanies from '../../__mocks__/SimilarCompanies.js'
import MockedCompanySpendStory from '../../__mocks__/CompanySpendStory.js'

export default {
  components: {
    VCard,
    VCardCompany,
    VList,
    VListActions,
    VContainer
  },
  data: function() {
    return {
      activitiesList: MockedActivities,
      similarCompanies: MockedSimilarCompanies,
      spendStory: MockedCompanySpendStory,
      company: {
        logo: require('../../images/companies/microsoft.png'),
        title: 'Microsoft',
        location: 'Redmond, WA USA',
        description: 'At Microsoft, our mission is to empower every person and every organization on the planet.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  &__page {
    display: flex;
    flex-wrap: wrap;

    &__row {
      flex-basis: 100%;
      flex-shrink: 0;
    }

    &__column {
      &--a,
      &--b {
        flex-grow: 2;
        flex-shrink: 0;
        flex-basis: 50%;
      }
    }
  }
}
</style>
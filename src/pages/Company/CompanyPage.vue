<template lang="pug">
  v-container(withoutBorder=true)
    v-company-resume
    .company__page
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
import VList from 'Components/VList/VList.vue'
import VListActions from 'Components/VList/VListActions.vue'
import VCompanyResume from 'Components/VCompanyResume/VCompanyResume.vue'
import VContainer from "Components/VContainer/VContainer.vue";

// Mocks
import MockedActivities from '../../__mocks__/CompanyActivites.js'
import MockedSimilarCompanies from '../../__mocks__/SimilarCompanies.js'
import MockedCompanySpendStory from '../../__mocks__/CompanySpendStory.js'

export default {
  components: {
    VCard,
    VList,
    VListActions,
    VCompanyResume,
    VContainer
  },
  data: function() {
    return {
      activitiesList: MockedActivities,
      similarCompanies: MockedSimilarCompanies,
      spendStory: MockedCompanySpendStory
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  &__page {
    display: flex;
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
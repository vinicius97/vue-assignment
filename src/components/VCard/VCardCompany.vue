<template lang="pug">
  .v-card--company
    .v-card--company__logo
      img(:src="company.logo")
    .v-card--company__sumary
      .v-card--company__sumary__title
        |  {{ company.title }}
      .v-card--company__sumary__location
        |  {{ company.location }}
    .v-card--company__description
      |  {{ company.description }}
</template>

<script>
export default {
  props: {
    company: Object
  }
};
</script>

<style lang="scss">
.v-card--company {
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  
  &__sumary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
      font-size: 30px;
    }

    &__location {
      font-size: 12px;
    }
  }

  &__logo {
    flex-basis: 70px;
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 2px 5px -1px var(--box-shadow-color);
    border-radius: 5px;
    margin-right: 15px;
  }

  &__description {
    padding: 15px;
  }
}
</style>

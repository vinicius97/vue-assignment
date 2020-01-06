<template lang="pug">
  v-layout(:navigation-options="navigationOptions")
    router-view
</template>

<script>
import VLayout from "Components/VLayout/VLayout.vue";

// Routes
import { routes } from './index'

export default {
  components: {
    VLayout
  },
  data: function() {
    return {
      navigationOptions: routes[0].children
    }
  }
};
</script>

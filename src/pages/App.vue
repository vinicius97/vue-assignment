<template lang="pug">
  transition
    keep-alive
      router-view
</template>

<script>
import VLayout from "Components/VLayout/VLayout.vue";
export default {
  components: {
    VLayout
  }
  
};
</script>

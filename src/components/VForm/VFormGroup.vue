<template lang="pug">
  div.v-form-group
    slot
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-form-group {
  padding: 10px 0px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    color: #b3b3b3;
    margin: 5px 0;
  }

  input, textarea {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.1);
    padding: 5px 15px;
  }

  textarea {
    min-height: 150px;
  }
}
</style>

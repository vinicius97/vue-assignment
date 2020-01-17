<template lang="pug">
  .modal
    .modal__mask(@click="handleClose")
    .modal__container
      slot
      slot(name='actions')
        button(@click="handleSave") Save
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleSave() {
      this.$emit("save");
    }
  }
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    position: absolute;
    width: 400px;
    height: 300px;
    background: #ffffff;
    z-index: 3;
  }

  &__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }
}
</style>

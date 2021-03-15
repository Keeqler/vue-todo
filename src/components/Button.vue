<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
})
</script>

<style scoped lang="scss">
.button {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border-radius: 6px;
  background: #41b883;
  transition: 300ms background;
  cursor: pointer;

  &:hover {
    background: #57da9f;
  }
}
</style>

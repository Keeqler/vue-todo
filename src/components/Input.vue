<template>
  <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Input',
  props: ['value'],
})
</script>

<style scoped lang="scss">
input {
  width: 100%;
  height: 44px;
  padding: 0 14px;
  font-size: 18px;
  border-radius: 6px;
  color: #fff;
  background: #333;

  &::placeholder {
    color: #ccc;
  }
}
</style>

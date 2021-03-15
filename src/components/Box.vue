<template>
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Box',
})
</script>

<style scoped lang="scss">
main {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-self: start;
  border-radius: 10px;
}
</style>

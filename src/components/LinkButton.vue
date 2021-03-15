<template>
  <router-link :to="to">
    <Button class="button" type="button">
      <slot />
    </Button>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'

import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'LinkButton',
  components: { Button },
  props: { to: String },
})
</script>

<style lang="scss" scoped>
a {
  width: 100%;
  max-width: 300px;
  text-decoration: none;
}
</style>

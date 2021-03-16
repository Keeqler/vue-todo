<template>
  <Box class="box">
    <h1>What's your name?</h1>

    <form v-on:submit.prevent="handleSubmit">
      <Input placeholder="Input your name" v-model="name" />
      <Button style="margin-top: 10px">Send</Button>
    </form>
  </Box>
</template>

<script lang="ts">
import Vue from 'vue'

import router from '@/router'
import Box from '@/components/Box.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { nameStore } from '@/store/name'

export default Vue.extend({
  name: 'Home',
  components: { Box, Input, Button },
  data() {
    return {
      name: '',
    }
  },
  methods: {
    handleSubmit() {
      const name = this.$data.name

      if (!name) return

      nameStore.setName(name)
      router.push('/todos')
    },
  },
})
</script>

<style scoped>
.box {
  min-height: 300px;
  margin: auto;
  justify-content: space-between;
}

form {
  width: 100%;
  max-width: 400px;
}
</style>

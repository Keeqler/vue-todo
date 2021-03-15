<template>
  <Box class="box">
    <h1>Create to-do</h1>

    <form v-on:submit.prevent="handleSubmit">
      <Input placeholder="To-do description" v-model="description" />
      <Button type="submit">Create</Button>
    </form>
  </Box>
</template>

<script lang="ts">
import Vue from 'vue'

import Box from '@/components/Box.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import router from '@/router'
import { Todo } from '@/types'

export default Vue.extend({
  name: 'CreateTodo',
  components: { Box, Input, Button },
  data() {
    return { description: '' }
  },
  methods: {
    handleSubmit() {
      const description = this.$data.description

      if (!description) return

      const todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')

      todos.push({ id: Math.random().toString(), description, done: false })
      localStorage.setItem('todos', JSON.stringify(todos))
      router.push('/todos')
    },
  },
})
</script>

<style lang="scss" scoped>
.box {
  min-height: 300px;
  margin: auto;
  justify-content: space-between;
}

form {
  width: 100%;
  max-width: 400px;

  button {
    margin-top: 10px;
  }
}
</style>

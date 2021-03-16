<template>
  <Box>
    <span class="welcome">
      Welcome, <strong class="welcomeName">{{ nameState.name }}</strong
      >!
    </span>

    <h1>Your to-dos</h1>
    <span class="noTodosMessage" v-if="!todosState.todos.length">There are no to-dos 🙁</span>

    <div class="todos">
      <div class="todo" v-for="todo in todosState.todos" :key="todo.id">
        <span>{{ todo.description }}</span>

        <div class="todoButtons">
          <button
            :class="todo.done ? 'checkButton checked' : 'checkButton'"
            type="button"
            v-on:click="handleToggleCheck(todo.id)"
          >
            <fa-icon icon="check" />
          </button>

          <button class="trashButton" type="button" v-on:click="handleDelete(todo.id)">
            <fa-icon class="trashIcon" icon="trash" size="lg" />
          </button>
        </div>
      </div>
    </div>

    <LinkButton class="addNewTodoBtn" to="/todos/create"
      ><fa-icon class="plusIcon" icon="plus" />Add new to-do</LinkButton
    >
  </Box>
</template>

<script lang="ts">
import Vue from 'vue'

import Box from '@/components/Box.vue'
import LinkButton from '@/components/LinkButton.vue'
import { nameStore } from '@/store/name'
import { todosStore } from '@/store/todos'

export default Vue.extend({
  name: 'Todos',
  components: { Box, LinkButton },
  data() {
    return {
      nameState: nameStore.state,
      todosState: todosStore.state,
    }
  },
  methods: {
    handleToggleCheck(id: string) {
      todosStore.toggleCheck(id)
    },
    handleDelete(id: string) {
      todosStore.deleteTodo(id)
    },
  },
})
</script>

<style scoped lang="scss">
.welcome {
  color: #bbb;
}

.welcomeName {
  color: #41b883;
}

h1 {
  margin-bottom: 40px;
}

.todos {
  width: 100%;
  max-width: 540px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .todo {
    max-width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    border-top: 1px solid #222;

    &:first-child {
      border-top: none;
    }

    span {
      padding-right: 14px;
    }

    .todoButtons {
      display: flex;
      flex-direction: row;
      align-items: center;

      button {
        width: 26px;
        height: 26px;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .checkButton {
        margin-right: 8px;
        color: #333;
        transition: color 300ms;

        &:hover {
          color: #555;
        }

        &.checked {
          color: #41b883;
        }
      }

      .trashButton {
        color: #f03738;
        transition: color 300ms;

        &:hover {
          color: #f18888;
        }
      }
    }
  }
}

.noTodosMessage {
  color: #777;
}

.addNewTodoBtn {
  max-width: 300px;
  margin-top: 20px;

  .plusIcon {
    margin-right: 6px;
  }
}
</style>

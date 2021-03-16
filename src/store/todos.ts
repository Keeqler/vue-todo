import { Todo } from '@/types'

export const todosStore = {
  state: {
    todos: JSON.parse(localStorage.getItem('todos') || '[]') as Todo[],
  },

  addTodo(description: string) {
    this.state.todos = [
      ...this.state.todos,
      { id: Math.random().toString(), description, done: false },
    ]
  },

  deleteTodo(id: string) {
    this.state.todos = this.state.todos.filter(todo => todo.id !== id)

    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  },

  toggleCheck(id: string) {
    this.state.todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }

      return todo
    })

    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  },
}

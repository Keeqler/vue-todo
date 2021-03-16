export const nameStore = {
  state: { name: localStorage.getItem('name') || '' },

  setName(name: string) {
    this.state.name = name

    localStorage.setItem('name', name)
  },
}

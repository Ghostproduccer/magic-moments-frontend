import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => {
    return {
      items: []
    }
  },
  getters: {
    getAll: (state) => state.items
  },
  actions: {
    fetchItems() {
      const urlapi = 'http://localhost:8080/itemsColors'
      fetch(urlapi)
        .then((res) => res.json())
        .then((data) => (this.items = data))
        .catch((e) => console.log(e.message))
    }
  }
})

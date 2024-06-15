import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => {
    return {
      items: [],
      item: {}
    }
  },
  getters: {
    getAll: (state) => state.items,
    getItem: (state) => state.item
  },
  actions: {
    fetchItems() {
      const urlapi = 'http://localhost:8080/api/items/itemsColors'
      fetch(urlapi)
        .then((res) => res.json())
        .then((data) => (this.items = data))
        .catch((e) => console.log(e.message))
    },
    getItemById(id) {
      const urlGetItemById = 'http://localhost:8080/api/items/itemsColors/' + id
      fetch(urlGetItemById)
        .then((res) => res.json())
        .then((data) => (this.item = data))
        .catch((e) => console.log(e.message))
    }
  }
})

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: [],
      total: 0
    }
  },
  getters: {
    getCartItems: (state) => state.cart,
    getCartTotal: (state) => state.total,
    getCartItemCount: (state) => state.cart.length
  },
  actions: {
    addToCart(item) {
      this.cart.push(item)
      this.calculateTotal()
    },
    removeFromCart(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId)
      this.calculateTotal()
    },
    clearCart() {
      this.cart = []
      this.total = 0
    },
    calculateTotal() {
      this.total = this.cart.reduce((sum, item) => sum + item.price, 0)
    }
  }
})

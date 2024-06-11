<script setup>
import { computed } from 'vue'
import BannerSlideComponent from './BannerSlideComponent.vue'
import BannerSwiperComponent from './BannerSwiperComponent.vue'

import { useItemsStore } from '@/stores/items'

const itemsStore = useItemsStore()

const items = computed(() => {
  return itemsStore.items
})

const handleBannerChange = (id) => {
  items.value.map((item) => {
    item.active = false
    if (item.id === id) item.active = true
    return item
  })
}
</script>
<template>
  <div class="banner">
    <BannerSlideComponent v-for="item in items" :key="item.id" :item="item" />

    <BannerSwiperComponent :items="items" :bannerChange="handleBannerChange" />
  </div>
</template>
<style scoped>
.banner {
  position: absolute;
  width: 100%;
  min-height: 85vh;
  background: var(--bgColor);
  transition: 1s;
}

@media (max-width: 768px) {
  .banner {
    min-height: 100vh;
  }
}
</style>

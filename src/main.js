//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(PrimeVue)

app.mount('#app')

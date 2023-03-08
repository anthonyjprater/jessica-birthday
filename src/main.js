import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Carousel3d from 'vue-carousel-3d'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Carousel3d)

app.mount('#app')

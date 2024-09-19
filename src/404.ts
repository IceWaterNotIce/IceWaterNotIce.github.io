import './assets/main.css'

import { createApp } from 'vue'

import ErrorView from './404.vue'

const app = createApp(ErrorView)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import Antd from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue'



const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')

for (const i in Icons) {
    app.component(i, Icons[i])
}

import {createApp} from 'vue'
import store from './store'
import router from './routes'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.config.globalProperties.$loading = false

app.use(store)
app.use(router)

app.mount('#app')


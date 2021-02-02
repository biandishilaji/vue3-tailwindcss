import {createApp} from 'vue'
import store from './store'
import router from './routes'
import App from './App.vue'
import './index.css'

process.env.API_URL = 'api.bookcase.local'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')


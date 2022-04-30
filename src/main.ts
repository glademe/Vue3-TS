import { createApp } from 'vue'
import { globalRegister } from './global'
import { setupStore } from './store'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(globalRegister)
//vuex
app.use(store)
//将localstorage的保存到vuex
setupStore()
//routes
app.use(router)

app.mount('#app')

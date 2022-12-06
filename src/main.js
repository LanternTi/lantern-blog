import { createApp } from 'vue'
import { router } from 'route/routes'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(router).use(pinia).mount('#app')
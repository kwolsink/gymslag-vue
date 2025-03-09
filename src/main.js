import {createApp} from 'vue'
import './style.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import {router} from "./router.js";
import ToastService from 'primevue/toastservice';



const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(router)
app.use(ToastService)

app.mount('#app')

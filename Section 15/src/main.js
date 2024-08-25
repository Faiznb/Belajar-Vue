import './assets/base.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { auth } from './includes/firebase'
import App from './App.vue'
import router from './router'
import veeValidatePlugin from './includes/validation'
import Icon from './directives/icon'

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.use(veeValidatePlugin)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})

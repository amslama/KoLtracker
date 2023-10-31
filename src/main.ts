import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from  './App.vue'
import  MainMenu from './views/MainMenu/MainMenu.vue'
import Tracker from './views/Tracker/Tracker.vue'


import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import * as VueRouter from 'vue-router'

    const routes = [
        { path: '/', component: MainMenu },
        { path: '/tracker', component: Tracker },
      ]


const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(createPinia())
app.use(router)

app.mount('#app')

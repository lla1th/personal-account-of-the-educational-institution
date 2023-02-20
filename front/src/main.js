import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/** Pinia install */
import { createPinia } from 'pinia';

const pinia = createPinia();

/** Quasar install */
import { Quasar } from 'quasar';

/** Import css Quasar */
import 'quasar/src/css/index.sass';

const quasarSettings = { plugins: {} };

createApp(App)
    .use(pinia)
    .use(Quasar, quasarSettings)
    .mount('#app')


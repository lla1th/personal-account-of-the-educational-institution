import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/** Quasar install */
import { Quasar } from 'quasar';

/** Import css Quasar */
import 'quasar/src/css/index.sass';

const quasarSettings = { plugins: {} };

createApp(App)
    .use(Quasar, quasarSettings)
    .mount('#app')


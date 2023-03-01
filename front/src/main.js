import { createApp } from 'vue';
import App from './App.vue';

/** router path */
import router from './router/routers.js';

/** Pinia install */
import { createPinia } from 'pinia';

const pinia = createPinia();

/** Quasar install */
import { Quasar } from 'quasar';

/** Import css Quasar */
import 'quasar/src/css/index.sass';

/** Import icons Quasar */
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';

const quasarSettings = { plugins: {} };

/** import components (beta) */
//todo перенести, доработать через цикл
import NightDrawer from "./components/high/NightDrawer.vue";
import NightCard from "./components/ui/NightCard.vue";

createApp(App)
    .use(router)
    .use(pinia)
    .use(Quasar, quasarSettings)
    .component('NightDrawer', NightDrawer)
    .component('NightCard', NightCard)
    .mount('#app')

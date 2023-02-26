import { createApp } from 'vue';
import App from './App.vue';

/** router path */
import router from './router/routers.js';

/** Pinia install */
import { createPinia, useMainStore } from 'pinia';

const pinia = createPinia();

/** Quasar install */
import { Quasar } from 'quasar';

/** Import css Quasar */
import 'quasar/src/css/index.sass';

/** Import icons Quasar */
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';

const quasarSettings = { plugins: {} };

/** import components (beta) */
//todo перенести доработать через цикл
import NightDrawer from "./components/NightDrawer.vue";

createApp(App)
    .use(router)
    .use(pinia)
    .use(Quasar, quasarSettings)
    .component('NightDrawer', NightDrawer)
    .mount('#app')


router.beforeEach((to) => {
    const main = useMainStore(pinia)

})


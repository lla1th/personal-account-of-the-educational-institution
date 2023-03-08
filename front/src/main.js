import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import App from './App.vue';

/** router path */
import router from './router/routers';

/** Import css Quasar */
import 'quasar/src/css/index.sass';

/** Import icons Quasar */
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';

/** import components */
import NightDrawer from './components/high/NightDrawer.vue';
import NightCard from './components/ui/NightCard.vue';
import NightTitle from './components/high/NightTitle.vue';

const pinia = createPinia();

const components = [NightTitle, NightCard, NightDrawer];

const quasarSettings = { plugins: {} };

const initApp = async () => {
  const app = createApp(App);
  components.forEach((element) => {
    // eslint-disable-next-line no-underscore-dangle
    const nameComponent = element.__name;

    app.component(nameComponent, element);
  });

  app.use(router)
    .use(pinia)
    .use(Quasar, quasarSettings);

  app.mount('#app');
};

initApp();

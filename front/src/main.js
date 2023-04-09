import { createApp } from 'vue';
import { createPinia } from 'pinia';
import langRu from 'quasar/lang/ru';
import { Quasar } from 'quasar';
import App from './App.vue';

/** router path */
import router from './router/routers';

/** Import css Quasar */
import 'quasar/src/css/index.sass';

/** Import icons Quasar */
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';

/** Import components */
import NightDrawer from './components/high/NightDrawer.vue';
import NightCard from './components/ui/NightCard.vue';
import NightTitle from './components/high/NightTitle.vue';

/** Import миксинов */
// import help from './help';

const components = [NightTitle, NightCard, NightDrawer];

const quasarSettings = { plugins: {}, lang: langRu };

const initApp = async () => {
  const app = createApp(App);

  components.forEach((element) => {
    // eslint-disable-next-line no-underscore-dangle
    const nameComponent = element.__name;
    app.component(nameComponent, element);
  });

  app.use(router)
    .use(createPinia())
    .use(Quasar, quasarSettings);

  app.mount('#app');
};

initApp();

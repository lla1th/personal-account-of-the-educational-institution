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
import NightSidePage from './components/high/NightSidePage.vue';

/** pages */
import AuthLayout from './layout/AuthLayout.vue';
import MainPageLayout from './layout/MainPageLayout.vue';

/** Import миксинов */
// import help from './help';

const components = [NightTitle, NightCard, NightDrawer, NightSidePage];

const quasarSettings = { plugins: {}, lang: langRu };

const initApp = async () => {
  const app = createApp(App);

  app.component('AuthLayout', AuthLayout);
  app.component('MainPageLayout', MainPageLayout);

  components.forEach((element) => {
    // eslint-disable-next-line no-underscore-dangle
    const nameComponent = element.__name;
    app.component(nameComponent, element);
  });

  app.use(router)
    .use(createPinia())
    .use(cors({
      credentials: true,
    }))
    .use(Quasar, quasarSettings);

  app.mount('#app');
};

initApp();

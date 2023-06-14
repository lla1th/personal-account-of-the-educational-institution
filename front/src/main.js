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
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css';
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css';
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css';
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css';
import '@quasar/extras/mdi-v7/mdi-v7.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';
import '@quasar/extras/eva-icons/eva-icons.css';
import '@quasar/extras/themify/themify.css';
import '@quasar/extras/line-awesome/line-awesome.css';
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css';

/** Import components */
import NightDrawer from './components/high/NightDrawer.vue';
import NightCard from './components/ui/NightCard.vue';
import NightTitle from './components/high/NightTitle.vue';
import NightSidePage from './components/high/NightSidePage.vue';
import NightButton from './components/ui/NightButton.vue';

/** pages */
import AuthLayout from './layout/AuthLayout.vue';
import MainPageLayout from './layout/MainPageLayout.vue';

const components = [NightTitle, NightCard, NightDrawer, NightSidePage, NightButton];

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
    .use(Quasar, quasarSettings);

  app.mount('#app');
};

initApp();

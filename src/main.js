import { createApp } from 'vue';
import App from './App.vue';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { router } from "./router";
import { store } from "./store";

const app = createApp(App);

app.use(router);
app.config.globalProperties.$store = store;

app.mount('#app');

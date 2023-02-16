import { createApp } from 'vue';
import App from './App.vue';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { router } from "./router";
// import "./search";

createApp(App).use(router).mount('#app');

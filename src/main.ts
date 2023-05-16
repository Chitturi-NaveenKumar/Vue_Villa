import { createApp } from "vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import 'quasar/src/css/index.sass'
import "./style.css";
import {router } from './router'
import App from "./App.vue";

const app = createApp(App);
app.use(Quasar, {
  plugins: {},
  config:{}
 
});
app.use(router);
app.mount("#app");

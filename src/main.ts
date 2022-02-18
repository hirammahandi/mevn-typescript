import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //importing router

createApp(App)
  .use(router) //using routes
  .mount("#app");

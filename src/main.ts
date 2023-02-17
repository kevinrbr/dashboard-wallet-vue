import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: () => import("./pages/Stock.vue") }],
});

const app = createApp(App);

app.use(router);
app.mount("#app");

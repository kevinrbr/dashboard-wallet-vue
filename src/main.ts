import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: () => import("./pages/Stock.vue") }],
});

library.add(faUserSecret);
const app = createApp(App);

app.use(router).component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

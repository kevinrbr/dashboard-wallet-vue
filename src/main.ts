import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

/* font awesome lib */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCubes,
  faLayerGroup,
  faPlus,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: () => import("./views/Stock.vue") }],
});

library.add(faCubes, faLayerGroup, faPlus, faGear);
const app = createApp(App);

app.use(router).component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue"; // Named export

const app = createApp(App);
app.component("Icon", Icon); // Register globally
app.mount("#app");

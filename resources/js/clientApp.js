import { createApp } from "vue";
import router from "./clientWeb/router";
import App from "./ClientApp.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
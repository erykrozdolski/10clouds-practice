import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "../public/scss/main.scss";

import VueLuxon from "vue-luxon";

Vue.config.productionTip = false

Vue.use(VueLuxon, {
  serverZone: 'utc',
  serverFormat: 'iso',
  clientZone: 'locale',
  clientFormat: 'locale',
  localeLang: "en",
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

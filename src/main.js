import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

Vue.config.productionTip = false

store.dispatch('auth_state_change');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

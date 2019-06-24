import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mheader from './components/mheader.vue'
import Tabbar from './components/Tabbar.vue'
import xiangqin from './components/xiangqin.vue'
import  './plugins/mint.js';




Vue.config.productionTip = false
Vue.component('mheader',mheader);
Vue.component('Tabbar',Tabbar);
Vue.component('xiangqin',xiangqin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

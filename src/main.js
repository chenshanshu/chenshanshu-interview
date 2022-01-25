import Vue from 'vue'
import App from './App.vue'
import './public/flexible'
import Ajax from '@/public/ajax'
require('@/public/mock')
Vue.use(Ajax)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

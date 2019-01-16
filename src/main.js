import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'chart.js/dist/Chart.js'
import 'chart.js/dist/Chart.min.js'
import 'axios/dist/axios.js'
import 'axios/dist/axios.min.js'

 
Vue.use(Buefy)
// Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

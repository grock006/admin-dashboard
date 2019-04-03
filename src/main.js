
import Vue from 'vue'
import App from './App'
import router from './router'
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Chart.plugins.unregister(ChartDataLabels)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

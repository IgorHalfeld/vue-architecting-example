import Vue from 'vue'
import axios from 'axios'
import {
  Card,
  Input,
  Button
} from 'element-ui'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.use(Card)
Vue.use(Input)
Vue.use(Button)
Vue.use(VueBreadcrumbs)
Vue.prototype.$axios = axios
Vue.prototype.$axios.create({
  baseURL: 'https://moveleiros.com.br/api/',
  timeout: 1000
})

import filters from './filters'
import services from './service'

Vue.use(services)

/**
 * Start all filters
 */
Array.forEach(filters, filter => Vue.filter(filter.name, filter.handler))

import App from './App'
import router from './router'
import store from './store'

import 'font-awesome/css/font-awesome.css'
import './stylus/main.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

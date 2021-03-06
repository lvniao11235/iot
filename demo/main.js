import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import store from './store'
Vue.prototype.$store = store

import 'font-awesome.css'
import 'base.css'
import moment from './utils/moment.js';
Vue.prototype.$moment = moment;
import navbar from './components/navbar.vue'

Vue.component('navbar', navbar)
const app = new Vue({
    ...App 
})
app.$mount()
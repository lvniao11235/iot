import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import store from './store'
Vue.prototype.$store = store

import 'font-awesome.css'
import 'base.css'

const app = new Vue({
    ...App
})
app.$mount()

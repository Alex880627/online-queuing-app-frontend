import Vue from 'vue'
import { store } from './store/store'
import My from './components/My.vue'
/* importing components, you name them here */
import App from './App.vue'
import Header from './Header.vue'
/* use arbitrary name */
import Gringos from '../src/nestedComp.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* registering components globally */
Vue.component('teso', Gringos);
Vue.component('my',My)


const app = new Vue({
  router:router,
  store:store,
  el: '#app',
  render: h => h(App)
})

const header = new Vue({
  
  el: '#header',
  render: h => h(Header)
})




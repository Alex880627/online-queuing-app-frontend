import Vue from 'vue'

/* importing components, you name them here */
import App from './App.vue'
import Header from './Header.vue'
/* use arbitrary name */
import Gringos from '../src/nestedComp.vue'

/* registering components globally */
Vue.component('teso', Gringos);

const app = new Vue({
  el: '#app',
  render: h => h(App)
})

const header = new Vue({
  el: '#header',
  render: h => h(Header)
})

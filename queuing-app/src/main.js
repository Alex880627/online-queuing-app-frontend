import Vue from 'vue'

/* importing components, you name them here */
import App from './App.vue'
/* use arbitrary name */
import Gringos from '../src/nestedComp.vue'

/* registering components globally */
Vue.component('teso', Gringos);

new Vue({
  el: '.app',
  render: h => h(App)
})

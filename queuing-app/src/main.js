'use strict';
import Vue from 'vue'
import { store } from './store/store'
import My from './components/My.vue'
/* importing components, you name them here */
import App from './App.vue'
//import Header from './Header.vue'
import Gringos from '../src/nestedComp.vue'

import HeaderComponent from './components/headerComponent.vue'


/* registering components globally */
Vue.component('teso', Gringos);
Vue.component('my',My);

Vue.component('headerComponent',HeaderComponent);

/* setting up routing */
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

const app = new Vue({
  router:router,
  store:store,
  el: '#app',
  render: h => h(App),
  router: router
})
/*
const header = new Vue({
  
  el: '#header',
  render: h => h(Header)
})*/




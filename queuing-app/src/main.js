'use strict';
import Vue from 'vue'
import { store } from './store/store'
import fetcherComponentDemo from './components/fetcherComponentDemo.vue'
/* importing components, you name them here */
import App from './App.vue'
//import Header from './Header.vue'
import Gringos from './components/nestedComp.vue'
//import VueResource from 'vue-resource';

import HeaderComponent from './components/headerComponent.vue'
import ProviderSettings from './components/ProviderSettings.vue'

/* registering comp/onents globally */
//Vue.component('teso', Gringos);
Vue.component('fetcherComponentDemo',fetcherComponentDemo);

Vue.component('providerSettings', ProviderSettings)
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




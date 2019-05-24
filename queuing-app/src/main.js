'use strict';

import Vue from 'vue';
import { store } from './store/store';
import fetcherComponentDemo from './components/fetcherComponentDemo.vue';
import App from './App.vue';
//import Header from './Header.vue'
import HeaderComponent from './components/headerComponent.vue';
import ProviderSettings from './components/provider-flow/ProviderSettings.vue';
import UserMainPage from './components/user-flow/user-main.vue';
import UserServicesDisplay from './components/user-flow/user-services-display.vue';
import UserAppointmentsDisplay from './components/user-flow/user-appointments-display.vue';

/* registering comp/onents globally */
Vue.component('fetcherComponentDemo',fetcherComponentDemo); //  what you name here can be imported inside everywhere
Vue.component('userMainComp', UserMainPage);
Vue.component('userServiceDisplay', UserServicesDisplay);
Vue.component('userAppointmentsDisplay', UserAppointmentsDisplay);
Vue.component('providerSettings', ProviderSettings)
Vue.component('headerComponent',HeaderComponent);

/* setting up routing */
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: "history",
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

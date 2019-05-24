'use strict';

import welcome from './components/welcome.vue';
import userLogin from './components/login-user.vue';
import userRegister from './components/user-register.vue';
import providerLogin from './components/login-provider.vue';
import providerSettings from './components/providerSettings.vue';
import slidebar from './components/slidebarComponent';

import providerRegister from './components/provider-register.vue';
import services from './components/services.vue';

export default[
  {path:'/', component:welcome},
  {path:'/userlogin', component: userLogin},
  {path:'/userRegister', component: userRegister},
  {path:'/providerlogin', component: providerLogin},
  {path:'/userlogin', component: userLogin}, 
  {path:'/providerSettings', component: providerSettings},
  {path:'/providerRegister', component: providerRegister},
  {path:'/services', component: services},
  {path:'/userpage',component: slidebar},
]
'use strict';

import welcome from './components/welcome.vue';
import userLogin from './components/login-user.vue';
import userRegister from './components/user-register.vue';
import providerLogin from './components/login-provider.vue';
import providerRegister from './components/provider-register.vue';
import services from './components/services.vue';

export default[
  {path:'/', component: welcome},
  {path:'/userlogin', component: userLogin},
  {path:'/userRegister', component: userRegister},
  {path:'/providerlogin', component: providerLogin},
  {path:'/providerRegister', component: providerRegister},
  {path:'/services', component: services},
 
]
'use strict';

import welcome from './components/welcome.vue';
import userLogin from './components/login-user.vue';
import providerLogin from './components/login-provider.vue';

export default[
  {path:'/', component: welcome},
  {path:'/userlogin', component: userLogin},
  {path:'/providerlogin', component: providerLogin},
  {path:'/userlogin', component: userLogin},
  {path:'/userlogin', component: userLogin},
 
]
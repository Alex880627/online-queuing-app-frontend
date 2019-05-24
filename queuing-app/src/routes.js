'use strict';

import welcome from './components/welcome.vue';
<<<<<<< HEAD
import userLogin from './components/login-user.vue';
import userRegister from './components/user-register.vue';
import providerLogin from './components/login-provider.vue';
import providerSettings from './components/providerSettings.vue';
import slidebar from './components/slidebarComponent';
=======
>>>>>>> 278fb56992696b64edcd9905e59d52ebf46f81d6





import userAppointments from './components/user-flow/user-appointments-display.vue'

import userLogin from './components/user-flow/login-user.vue';
import userRegister from './components/user-flow/user-register.vue';
import providerLogin from './components/provider-flow/login-provider.vue';
import providerSettings from './components/provider-flow/providerSettings.vue';
import providerRegister from './components/provider-flow/provider-register.vue';
import userMainPage from './components/user-flow/user-main.vue';


export default[
  {path:'/', component:welcome},
  {path:'/userlogin', component: userLogin},
  {path:'/userRegister', component: userRegister},
  {path:'/providerlogin', component: providerLogin},
  {path:'/userlogin', component: userLogin}, 
  {path:'/providerSettings', component: providerSettings},
  {path:'/providerRegister', component: providerRegister},
<<<<<<< HEAD
  {path:'/services', component: services},
  {path:'/userpage',component: slidebar},
=======
  {path:'/user-main', component: userMainPage},

>>>>>>> 278fb56992696b64edcd9905e59d52ebf46f81d6
]
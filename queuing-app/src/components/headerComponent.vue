<template>
   <div> 
     <div v-if="true === getIsLoggedIn">
       <div v-if="true === getIsAdmin">
        <router-link to='/userlogin'> LogOut</router-link>
        <router-link to='/providerSettings'> Settings</router-link>
        <router-link to='/providerlogin'> Profile</router-link>
        <router-link to='/providerlogin'> Back To Home</router-link>
       </div>
      <div v-if="false === getIsAdmin">
        <router-link to='/userlogin'> Log Out</router-link>
        <router-link to='/providerlogin'> Settings</router-link>
        <router-link to='/providerlogin'> My Appointments</router-link>
        <router-link to='/providerlogin'> Back To Home</router-link>
       </div>
     </div>
    <div v-if="false === getIsLoggedIn">  
        <router-link to='/userlogin'> Login</router-link>
        <router-link to='/providerlogin'> Register</router-link>
     </div>
   </div>
</template>

<script>
export default {
  name: 'headerComponent',
  computed:{
     
      getIsLoggedIn() {
          return this.$store.state.isLoggedIn.isLoggedIn
      },
       getIsAdmin() {
          return this.$store.state.isAdmin.isAdmin
      },
  } ,
  methods:{
    getHaha: function() {
      return this.data.haha
    }
  }
}
</script>

<style>

</style>
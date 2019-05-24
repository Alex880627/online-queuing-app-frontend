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
        <router-link to='/userlogin' @click.native="refreshPage"> Log Out</router-link>
        <router-link to='/providerlogin'> Settings</router-link>
        <router-link to='/user-main'> Back To Home</router-link>
       </div>
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
    },
    refreshPage: function() {
      window.location.reload();
    },
  }
}
</script>

<style>

</style>
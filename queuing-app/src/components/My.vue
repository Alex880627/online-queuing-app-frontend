<template>
   <div>
     
     {{ greetingsFromStore }}
     {{  getFromStore }}
     
     <button v-on:click="fetcher()">Fetcher</button>
     
      <router-link to='/providerlogin'> goooooooooo</router-link>
   </div>
</template>

<script>
export default {
  name: 'my',
  computed:{
      greetingsFromStore() {
          return this.$store.state.hello.hy
      } ,
       getFromStore() {
          return this.$store.state.fetched.data
      }
  }
  ,
  methods:{
    grettings: function() {
      return "hello woooorldzzzz"
    },
   
    
    greetPlusName: function() {
        this.$store.dispatch('addNameToGreeting')
    },

     fetcher: function() {
        this.$store.dispatch('fetchToStore')
     },

    goAway: function() {
      this.$router.go('/providerlogin');
    }
  }
  
}
</script>

<style>

</style>
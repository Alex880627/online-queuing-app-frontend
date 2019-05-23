<template>
   <div>
     {{ grettings() }}
     {{ greetingsFromStore }}
     <button v-on:click="greetPlusName"> Hello Plus Name</button>
   </div>
</template>

<script>
export default {
  name: 'my',
  computed:{
      greetingsFromStore() {
          return this.$store.state.hello.hy
      }
  }
  ,
  methods:{
    grettings: function() {
      return "hello woooorldzzzz"
    },
    /*
    greetPlusName: function() {
        this.$store.commit('addNameToGreeting')
    }*/
    greetPlusName: function() {
        this.$store.dispatch('addNameToGreeting')
    }
  }
  
}
</script>

<style>

</style>
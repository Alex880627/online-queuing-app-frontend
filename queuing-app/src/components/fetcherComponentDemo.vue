<template>
   <div>
      
     {{  getFromStore }}
     
     <button v-on:click="fetcher()">Fetcher</button>
     
   </div>
</template>

<script>
export default {
  name: 'fetcherComponentDemo',
  computed:{
     
       getFromStore() {
          return this.$store.state.fetched.data
      }
  }
  ,
  methods:{
   
     fetcher: function() {
        this.$store.dispatch('fetchToStore')
     },
  }
  
}
</script>

<style>

</style>
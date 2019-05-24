<template>
   <div>
     {{  getFromStore }}
     <button v-on:click="fetcher()">Fetcher</button>
   </div>
</template>

<script>
   export default {
      computed: {
         getFromStore() {
            return this.$store.state.databaseData.data
         }
      },
      methods: {
         fetcher: function() {
            this.$store.dispatch('fetchToStore')
         },
      },
   }
</script>

<style>
</style>
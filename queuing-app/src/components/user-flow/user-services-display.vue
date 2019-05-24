<template>
  <div id='userServiceDisplay'>
    <h3>Available services</h3>
      <ul>
        <li v-for="serviceType in getServiceTypes" :key="serviceType">{{ serviceType }}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'userServiceDisplay',
    computed: {
      getServiceTypes() {
        return this.$store.state.databaseData.service_types;
      },
    },
  };
</script>

<style lang="scss">
  #services {
    height: 400px;
    padding-top: 60px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

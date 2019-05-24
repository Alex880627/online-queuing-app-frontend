<template>
  <div id="welcome">
    <h1>{{greeting()}}</h1>
      <router-link to="/userLogin" tag="button">I am a customer</router-link>
      <router-link to="/providerlogin" tag="button">I am a provider</router-link>
  </div>
</template>

<script>
  export default {
    name: "welcome",
      data() {
          return {};
      },
    methods: {
      greeting() {
        return "Welcome to the Beauty-Board!";
      },
      fetchData() {
        this.$store.dispatch('fetchCustomDataToStore', "/login-user", {'email': 'kozosmarika@gmail.com', 'password': 'kiskecske'})
      },
    },
  };
</script>

<style scoped lang="scss">
  #welcome {
    height: 400px;
    padding-top: 60px;
    font-size: 30px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
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
    display: inline;
    margin: 0 10px;
  }

button {
  width: 120px;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
}

  a {
    color: #42b983;
    width: 30px;
  }
</style>

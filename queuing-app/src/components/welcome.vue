
<template>
  <div id="welcome">
    <h1>{{greeting()}}</h1>
      <button>
        <router-link to="/userLogin">I am a user</router-link>
      </button>
      <button v-on:click="fetchData()">
        <router-link to="/providerlogin">I am a provider</router-link>
      </button>
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
        this.$store.dispatch('fetchCustomDataToStore', "/login-user", {'email': 'kozosmarika@gmail.com', 'password': 'kiskecske'}) //  last parameter is mocked, should be coming from input
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

a {
  color: #42b983;
  width: 30px;
}
</style>

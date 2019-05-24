<template>
  <div id="providerLogin">
    <h3>Provider login</h3>
      <br>
        <input type="text" v-model="email">
      <br>
      <br>
        <input type="text" v-model="password">
      <br>
      <button v-on:click="logUser">Login</button>
  </div>
</template>

<script>
export default {
  name: "providerLogin",
   data() {
    return {
      email: "fsadfgda",
      password: "saagfafd"
    };},
  methods: {
    
    logUser: function() {
       console.log(this.email)
        this.$store.dispatch('fetchToLoginprovider',{ email: this.email,
            password: this.password})
     },
  
  }
};
</script>

<style lang="scss">
#providerLogin {
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
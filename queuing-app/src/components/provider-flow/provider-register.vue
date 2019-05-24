
<template>
  <div id="providerRegister">
     <h3>Provider registration</h3>
      <br>
        <input type="text" v-model="username">
      <br>
      <br>
        <input type="text" v-model="lastname">
      <br>
      <br>
        <input type="text" v-model="firstname">
      <br>
      <br>
        <input type="text" v-model="email">
      <br>
      <br>
        <input type="text" v-model="password">
      <br>
      
      <button v-on:click="registerUser">Register</button>
  </div>
</template>

<script>
export default {
  name: "providerRegister",
  data() {
    return {
      email: "fsadfgda",
      password: "saagfafd"
    };},
  methods: {
    
    registerUser: function() {
       console.log(this.email)
        this.$store.dispatch('fetchToRegisterProvider',{
          username: this.username,
          lastname: this.lastname,
          firstname:  this.firstname,
          email: this.email,
          password: this.password })
     },
  
  }
};
</script>

<style lang="scss">
#providerRegister {
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

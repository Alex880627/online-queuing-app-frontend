
<template>
  <div id="userRegister">
    <h3>Customer registration</h3>
      <br>
        <input type="text" v-model="username" placeholder="username">
      <br>
      <br>
        <input type="text" v-model="lastname" placeholder="lastname">
      <br>
      <br>
        <input type="text" v-model="firstname" placeholder="firstname">
      <br>
      <br>
        <input type="email" v-model="email" placeholder="email">
      <br>
      <br>
        <input type="password" v-model="password" placeholder="password">
      <br>
      
      <button v-on:click="registerUser">Register</button>
  </div>

</template>

<script>
export default {
  name: "userRegister",
     data() {
    return {
      email: "",
      password: ""
    };},
  methods: {
    registerUser: function() {
        this.$store.dispatch('fetchToRegisterUser',{
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
  #userRegister {
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


<template>
  <div id="providerLogin">
    <h3>Customer login</h3>
        <br>
      <label>E-mail</label><br>
        <input type="text" v-model="email">
      <br>
      <br>
      <label>Password</label><br>
        <input type="password" v-model="password">
      <br>
      <router-link to="/user-main" tag="button" @click.native="logUser">Login</router-link>
    <div>
      <nav>
        <a>
          <router-link to="/userRegister" tag="button">Register</router-link>
        </a>
        <br>
        <a>
          <router-link to="/">Forgot my password</router-link>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "userLogin",
   data() {
    return {
      email: "kozosmarika@gmail.com",
      password: "kiskecske"
    };},
  methods: {
    
    logUser: function() {
       console.log(this.username)
        this.$store.dispatch('fetchToLoginUser',{ email: this.email,
            password: this.password})
     },
  
  }
};
</script>

<style lang="scss">
#userLogin {
  height: 400px;
  padding-top: 60px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
  border-radius: 3px;
  width: 15%;
  height: 20px;
}

button {

  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
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

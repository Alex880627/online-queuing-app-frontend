/* - - - this is just a component - - - */
<template>
  <div id="providerLogin">
    <h3>Provider login page</h3>
    <form action>
      <label for="email">Email</label>
      <br>
      <input v-model="email" id="email" placeholder="your@email.com" >
      <br>
      <label for="password">Password</label>
      <br>
      <input v-model="password" id="password">
      <br>
      <button v-on:click.prevent="post">Login</button>
    </form>
    <div>
      <nav>
        <a>Register</a>
        <br>
        <a>Forgot my password</a>
      </nav>
    </div>
  </div>
</template>

<script>
console.log(this.email);
export default {
  name: "providerLogin",
  data() {
    return {
        email: "",
        password: ""
    }
  },
  methods: {
    post: function() {
      this.$http.post("http://localhost:4000/login-provider", {
        email: "kozosmarika@gmail.com",
        password: "kiskecske"
      }).then(function(data){
        console.log(data);
      });
    }
  }
};
</script>

<style lang="scss">
#providerLogin {
  height: 400px;
  background: rgb(246, 230, 235);
  padding-top: 60px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

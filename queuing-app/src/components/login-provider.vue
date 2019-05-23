/* - - - this is just a component - - - */
<template>
  <div id="providerLogin">
    <h3>Provider login page</h3>
    <form action>
      <label for="email">Email</label>
      <br>
      <input @input="email($event.target.value)">
      <br>
      <label for="password">Password</label>
      <br>
      <input @input="password($event.target.value)">
      <br>
      <button v-on:click.prevent="post">Login</button>
    </form>
    <div>
      <nav>
        <a>
          <router-link to="/providerRegister">Register</router-link>
        </a><br>
        <a>
          <router-link to="/">Forgot my password</router-link>
        </a>
      </nav>
      </div>
  </div>
</template>

<script>
export default {
  name: "providerLogin",
  data() {
    return {
        emailOfProvider: "",
        passwordOfProvider: ""
    }
  },
  methods: {
    email(value) {
      this.emailOfProvider = value;
        },
    password(value) {
      this.passwordOfProvider = value;
        },
    post: function() {
      console.log(this.passwordOfProvider),
      console.log(this.emailOfProvider),
      this.$http.post("http://localhost:4000/login-user", {
        email: this.emailOfProvider,
        password: this.passwordOfProvider
      }, {
        "Content-type": "application/json"
      } ).then(function(data){
        console.log(data.message);
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

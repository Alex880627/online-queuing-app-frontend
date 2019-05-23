
<template>
  <div id="userLogin">
    <h3>User login page</h3>
    <form action>
      <label for="email">Email</label>
      <br>
      <input type="email" id="email" placeholder="your@email.com">
      <br>
      <label for="password">Password</label>
      <br>
      <input type="password" id="password">
      <br>
      <button v-on:click="dosome()">
        <router-link to="/services">Login</router-link>
      </button>
    </form>
    <div>
      <nav>
        <a>
          <router-link to="/userRegister">Register</router-link>
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
    return {};
  },
  methods: {
    dosome: function() {
      alert("hello");
    }
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

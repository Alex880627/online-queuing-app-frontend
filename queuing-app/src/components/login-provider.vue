/* - - - this is just a component - - - */
<template>
  <div id="providerLogin">
    <h3>Provider login page</h3>
    <form action>
      <label for="email">Email</label>
      <br>
      <input type="email" id="email" placeholder="your@email.com">
      <br>
      <label for="password">Password</label>
      <br>
      <input type="password" id="password">
      <br>
      <button>Login</button>
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
    return {};
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

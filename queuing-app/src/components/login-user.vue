
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
      <button>Login</button>
    </form>
    <div>
      <nav>
        <a>
          <router-link to="/userLogin">Register</router-link>
        </a><br>
        <a>
          <router-link to="/userLogin">Forgot my password</router-link>
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
  }
  
};
</script>

<style lang="scss">
#userLogin {
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

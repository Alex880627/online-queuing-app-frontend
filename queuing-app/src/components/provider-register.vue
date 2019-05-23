
<template>
  <div id="providerRegister">
    <h3>Provider register page</h3>
    <form action>
      <label for="username">Username</label>
      <br>
      <input type="text" id="username">
      <br>
      <label for="lastname">Lastname</label>
      <br>
      <input type="text" id="lastname">
      <br>
      <label for="firstname">Firstname</label>
      <br>
      <input type="text" id="firstname">
      <br>
      <label for="email">Email</label>
      <br>
      <input type="email" id="email" placeholder="your@email.com">
      <br>
      <label for="password">Password</label>
      <br>
      <input type="password" id="password">
      <br>
      <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "providerRegister",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#providerRegister {
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

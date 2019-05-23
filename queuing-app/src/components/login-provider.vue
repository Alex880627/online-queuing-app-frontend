/* - - - this is just a component - - - */
<template>
  <div id="providerLogin">
    <h3>Provider login page</h3>
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

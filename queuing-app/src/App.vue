/* - - - this is the root component - - - */
<template>
  <div id="root">
    <headerComponent></headerComponent>
    <!-- <fetcherComponentDemo></fetcherComponentDemo> -->
    <router-view></router-view>
  </div>
</template>

/* - - - logic comes here - - - */
<script>
/* registering components locally */

export default {
  name: "root",
  data() {
    return {};
  },
  methods: {
    greeting() {
      return "Welcome, bitch!";
    }
  }
};
</script>

/* - - - styling - - - */
/* gets applied to all nested components as well, unless scoped */
<style scoped lang="scss">
#root {
  height: 400px; 
  /* background: rgb(246,230,235); */
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
  display: inline;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

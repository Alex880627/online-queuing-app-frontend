/* - - - this is the root component - - - */
<template>
  <div id="root">
    <h1>{{title}}</h1>
    <h2>{{greeting()}}</h2>
    <teso></teso>
  </div>
</template>

/* - - - logic comes here - - - */
<script>
/* registering components locally */
/* import Gringos from '../src/nestedComp.vue' */

export default {
  /* registering components locally */
  /* components: {
    teso: Gringos
  }, */
  name: "root",
  data() {
    return {
      title: "This is the root component"
    };
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
  display: inline;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

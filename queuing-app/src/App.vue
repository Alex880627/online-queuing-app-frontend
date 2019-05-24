<template>
  <div id="root">
    <headerComponent></headerComponent>
    <!-- <fetcherComponentDemo></fetcherComponentDemo> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "root",
    data() {
      return {};
    },
  methods: {
    greeting() {
      return "Welcome, bitch!";
    },
  },
};
</script>

<style scoped lang="scss">
  #root {
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
    display: inline;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

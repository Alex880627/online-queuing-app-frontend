/* - - - this is just a component - - - */
<template>
  <div id="tesok">
    <h3>This is a nested component</h3>
    <ul>
      <li v-for="index in tesok" :key="index">{{index}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tesok",
  data() {
    return {
      tesok: ["Ádám", "Ádi", "Dezső"]
    };
  }
};
</script>

<style lang="scss">
#tesok {
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

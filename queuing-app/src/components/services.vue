
<template>
  <div id="services">
    <h3>Available services</h3>
    <table>
      <thead>
        <tr>
          <p>Hairdresser</p>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Monday</th>
          <td>Entry</td>
        </tr>
        <tr>
          <th>Tuesday</th>
          <td>Entry</td>
        </tr>
        <tr>
          <th>Wednesday</th>
          <td>Entry</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <p>Vet</p>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Index</th>
          <td>Entry</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#services {
  height: 400px;
  padding-top: 60px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

table {
  margin: 10px;
  padding: 10px;
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

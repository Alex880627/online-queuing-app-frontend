
<template>
  <div id="providerRegister">
    <h3>Provider register page</h3>
      <label for="companyname">Name of your company</label>
      <br>
      <input type="text" v-model="companyname">
      <br>
      <label for="email">Email</label>
      <br>
      <input type="email" v-model="email">
      <br>
      <label for="password">Password</label>
      <br>
      <input type="password" v-model="password">
      <br>
      <div id="checkbox">
      <h2>Please choose your type of service</h2>
      <label>Hairdresser</label>
      <input type="checkbox" value="" v-model="services.type" />
      <label>Dentist</label>
      <input type="checkbox" value="" v-model="services.type" />
      <label>Plastic</label>
      <input type="checkbox" value="" v-model="services.type" />
      <label>Massage terapic</label>
      <input type="checkbox" value="" v-model="services.type" />
    </div>
    <div>
      <button>Register</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "providerRegister",
  data() {
    return {
      service:{
        type:[],
      }
    };
  }
};
</script>

<style lang="scss">
#providerRegister {
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

<template>
  <div>
    {{ getFromStore() }}
    <!--  <button v-on:click="fetcher()">Fetcher</button> -->
   <!--   <ul>
      <li v-for="index in tesok" :key="index">{{index}}</li>
    </ul> -->
    <tbody>
      <tr v-for="(service, index) in services">
        <td>{{index}}</td>
        <th>{{service.serviceName}}</th>
        <td>{{service.providerName}}</td>
        <td>{{service.appointmentDate}}</td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  data: {
    services: []
  },
  computed: {
    /* getFromStore() {
      return this.$store.state.databaseData.data;
    } */
  },
  methods: {
    getFromStore() {
      this.services = [...this.$store.state.databaseData.appointments_user];
    },

    fetcher: function() {
      this.$store.dispatch("fetchToStore");
    }
  }
};
</script>

<style>
</style>
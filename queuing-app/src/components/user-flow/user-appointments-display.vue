<template>
  <div id="userAppointmentsDisplay">
    {{getAppointments}}
    <h3>Booked Appointments</h3>
    <tbody>
      <tr v-for="(appointment, index) in appointments">
        <td>{{index+1}}</td>
        <th>{{appointment.serviceName}}</th>
        <td>{{appointment.providerName}}</td>
        <td>{{appointment.appointmentDate}}</td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  name: "userAppointmentsDisplay",
  data: {
    appointments: []
  },
  computed: {
    getAppointments() {
      console.log("yoyoyoyoyoyoy" + this.$store.state.userAppointments.data);
      this.appointments = [...this.$store.state.userAppointments.data];
      /* this.appointments = [...this.$store.state.databaseData.appointments_user]; */
    }
  },
  methods: {
    fetcher: function() {
      this.$store.dispatch("fetchToStore");
    }
  }
};
</script>
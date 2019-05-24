<template>
  <div id='userAppointmentsDisplay'>
    <h3>Booked Appointments</h3>
      {{getAppointments}}
      <table>
        <tr>
        <th>Index</th>
        <th>Service</th>
        <th>Provider</th>
        <th>Date</th>
        </tr>
      <tr v-for="(appointment,index) in appointments">
        <td>{{index+1}}</td>
        <td>{{appointment.serviceName}}</td>
        <td>{{appointment.providerName}}</td>
        <td>{{appointment.appointmentDate}}</td>
        </tr>
        </table>
  </div>
</template>

<script>
  export default {
    name: 'userAppointmentsDisplay',
    data: {
      appointments: []
      
    },
    computed: {
     getAppointments() {
        this.appointments =[ ...this.$store.state.userAppointments.data];
      },
    },
    methods: {
      
    },
  };
</script>

<style lang="scss">
#userAppointmentsDisplay {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  table, td, th, tr{ 
    color: #2c3e50;
    border: 1px solid rgb(148, 148, 148);
    border-collapse: collapse;
    background-color:rgba(66, 185, 131,0.1);
    padding: 5px;
  }
  table {
    border-radius: 3px;
  }
  h3 {
    font-size: 25px;
  }
}
</style>
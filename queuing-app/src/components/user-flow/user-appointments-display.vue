<template>
  <div id='userAppointmentsDisplay'>
    <h3>Booked Appointments</h3>
      {{getAppointments}}
      <tr v-for="(appointment,index) in appointments">
        <td>{{index}}</td>
        <th>{{appointment.serviceName}}</th>
        <th>{{appointment.providerName}}</th>
        <th>{{appointment.appointmentDate}}</th>
        </tr>
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
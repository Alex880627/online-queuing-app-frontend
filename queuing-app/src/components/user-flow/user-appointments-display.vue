<template>
  <div id='userAppointmentsDisplay'>
    <h3>Booked Appointments</h3>
      <ul>
        <li v-for="appointment in getAppointments" :key="appointment">{{ appointment }}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'userAppointmentsDisplay',
    data:{
      appointments:[]
    },
    computed: {
     getAppointments() {
        return this.$store.state.userAppointments.data;
      },
    },
    methods: {
      
    },
  };
</script>
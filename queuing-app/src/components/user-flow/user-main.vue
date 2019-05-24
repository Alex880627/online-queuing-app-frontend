<template>
  <div id='userMainComp'>
    <userAppointmentsDisplay></userAppointmentsDisplay>
    <userServiceDisplay></userServiceDisplay>
  </div>
</template>

<script>
  export default {  //  maybe data() needs to be implemented and the store filled into it
    name: 'userMainComp',
    computed: {},
    methods: {
      /* fetchData() {
        this.$store.dispatch('fetchCustomDataToStore', "/login-user", bodyData)   last parameter is mocked, should be coming from input
      }, */
    },
  };
</script>
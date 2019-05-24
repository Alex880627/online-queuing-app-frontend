<template>
  <div id="providerSettings">
    <label>What kind of service do you search?</label>
    <br>
    <select v-model="service.type">
      <option v-for="type in types">{{type}}</option>
    </select>
    <p>Selected service type : {{service.type}}</p>
    <br>
    <span> Description: </span>
    <p style="white-space: pre-line;">{{ description.content }}</p><br>
    <textarea v-model="description" placeholder="Please fill the form out"></textarea><br>
  </div>
</template>

<script>
export default {
  name: "providerSettings",
  data() {
    return {
      service: {
        type: ""
      },
      types: ["dentist", "hairdresser", "massage terapic", "plastic"],

      description: {
        content: ""
      },
      service:this.service.type,
      description:this.description.content
    };
  }
};
</script>
<style scoped>
</style>
<template>
  <div id="slidebar">
    <label>What kind of service are zou interested in?</label><br>
      <select v-model="service.type">
      <option v-for="type in types">{{type}}</option>
      </select>
    <p>Your service of choice : {{service.type}}</p>
  </div>
</template>
<script>

export default {
  name:"slidebar",
    data(){
      return{
        service:{
        type:""
        },
        types:["hair coloring","head massage","just cut", "mohawk"]
      }
    }
}
</script>

<style scoped></style>

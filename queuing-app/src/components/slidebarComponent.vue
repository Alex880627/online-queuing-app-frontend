<template>
  <div id="slidebar">
    <label>What kind of service do you search?</label><br>
    <select v-model="service.type">
     <option v-for="type in types">{{type}}</option>
    </select>
    <p>Selected service type : {{service.type}}</p>
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
            types:["dentist","hairdresser","massage terapic", "plastic"]
        }
    }
}
</script>
<style scoped>
</style>


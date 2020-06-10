<template>
  <div>
      <h1>Create New User</h1>
      <form v-on:submit.prevent="addUser">
    <label for="name"> Name:</label>
    <input type="text" id="name" name="name" v-model="name" required/>
      <br>
    <label for="positionHeld">PositionHeld:</label>
    <input type="text" id="positionHeld" name="positionHeld" v-model="positionHeld" required/>     
      <br>
      <label for="email"> Email:</label>
    <input type="email" id="email" name="email" v-model="email" required/>
      <br>
    <input type="submit" name="submit" value="Add User" />
    </form>
  </div>
</template>

<script>
    import { eventBus } from '@/main';
export default {
    name: 'NewUser',
    data(){
        return{
        name: "",
        positionHeld: "",
        email: "",
     };
   },

   methods: {
       addUser: function(){
           eventBus.$emit('add-user', this.$data);
           this.name = this.positionHeld = this.email = "";
       }
   }
}
</script>



<style>

</style>
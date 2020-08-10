<template>
  <div>
    <h1>Create User</h1>
    <form v-on:submit.prevent="addUser">
    <b-field label for="name"> Name:</b-field>
    <b-input type="text" id="name" name="name" v-model="name" required/>
    <b-field label for="positionHeld">Position Held:</b-field>
    <b-input type="text" id="positionHeld" name="positionHeld" v-model="positionHeld" required/>
    <b-field label for="email"> Email:</b-field>
    <b-input type="email" id="email" name="email" v-model="email" required/>
    <b-button tag="input"
      native-type="submit"
      value="Create user" />
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
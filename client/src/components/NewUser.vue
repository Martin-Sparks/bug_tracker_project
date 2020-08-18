<template>
  <div>
    <h1 class="title is-4">Create User</h1>
    <form v-on:submit.prevent="addUser">
    <b-field class="subtitle is-5" label for="name"> Name:</b-field>
    <b-input type="text" id="name" name="name" v-model="name" required/>
    <br>
    <b-field class="subtitle is-5" label for="positionHeld">Position Held:</b-field>
    <b-input type="text" id="positionHeld" name="positionHeld" v-model="positionHeld" required/>
    <br>
    <b-field class="subtitle is-5" label for="email"> Email:</b-field>
    <b-input type="email" id="email" name="email" v-model="email" required/>
    
    <br>
      <b-button class="is-danger" tag="input"
        native-type="submit"
        value="Create user" />
    
    </form>

  <div class="is-hidden-mobile fill-screen-fix"></div>

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
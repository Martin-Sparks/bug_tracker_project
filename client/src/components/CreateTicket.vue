<template lang="html">
  <div>
    <!-- <p>Navbar, footer, content, sidebar?</p> -->
    <h1>Add A New Ticket</h1>
    <form v-on:submit.prevent>
    <label for="name"> Name Of Ticket:</label>
    <input type="text" id="name" name="name" v-model="name" required/>
      <br>
    <label for="description">Description:</label>
    <input type="text" id="description" name="description" v-model="description" required/>
      <br>
    <label for="dateCreated">Date Created:</label>
    <input type="date" selected="" id="dateCreated" name="dateCreated" v-model="dateCreated" required/>
      <br>
    <label for="timeCreated">Time Created:</label>
    <input type="time" id="timeCreated" name="timeCreated" v-model="timeCreated" required/>
      <br>
    <label for="ticketStatus">Ticket Status:</label>
    <input type="" id="ticketStatus" name="ticketStatus" v-model="ticketStatus" required/>
      <br>
    <label for="label">Label</label>
    <input type="text" id="label" name="label" v-model="label" required/>
      <br>
    <label for="priorityStatus">Priority Status</label>
    <select v-model="priorityStatus">
        <option value="Low">Low</option>  
        <option value="Medium">Medium</option>  
        <option value="High">High</option>  
    </select>
      <br>  
        <input type="submit" name="submit" value="Save" />
    </form>

  </div>
</template>

<script>

import { eventBus } from '@/main';

export default {
  name: "CreateTicket",
  components: {
  },
  data: function() {
    return {
        name: "",
        description: "",
        dateCreated: "",
        timeCreated:"",
        ticketStatus: null,
        label: "",
        priorityStatus:""




    };
  },

  methods: {
    getTodaysDate: function() {
        today = new date().toISOString().substr(0, 10);
        document.querySelector("#dateCreated").value = today;        
      },

      handleSubmit(){
        eventBus.$emit('submit-ticket', this.data);
      }

  },

  computed: {
    getTodaysDate() {
    }
  },
};

</script>

<style>

</style>

//         name: "button not working",
//         description:"Button doesn't click",
//         dateCreated:"04062020",
//         timeCreated:"2024",
//         ticketStatus:"Fixed",
//         assignedTo:"Martin",
//         label:"Front End",
//         priorityStatus:"Urgent"

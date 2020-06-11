<template>
  <div>
    <h2>Ticket name: {{this.ticket.name}}</h2>
    <p>Description: {{this.ticket.description}}</p>
    <p>Date Created: {{this.ticket.dateCreated}}</p>
    <p>Time Created: {{this.ticket.timeCreated}}</p>
    <p>Ticket Status: {{this.ticket.ticketStatus}}</p>
    <p>Label: {{this.ticket.label}}</p>
    <p>Priority Status: {{this.ticket.priorityStatus}}</p>
    <br>
    <p>assigned To: {{this.ticket.assignedTo}}</p>

    <label for="users_select">Assign a User to this ticket:</label>
        <select>
           <option v-for="user in users" :value="user"> {{user.name}}</option>
        </select>
    <br>
    <button v-on:click="deleteTicket">Delete Ticket</button>
     
  </div>
</template>

<script>

import { eventBus } from '@/main';
export default {
  name: "single-ticket",
  props: ["ticket", "users"],

  data() {
    return {
   
    }
   },


    methods: {
        deleteTicket: function(){
        eventBus.$emit('delete-ticket', this.ticket._id);
        }
    },

  
};
</script>

<style></style>

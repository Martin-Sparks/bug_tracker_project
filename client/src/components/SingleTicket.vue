<template>
  <div>
    <h2>Ticket name: {{this.ticket.name}}</h2>
    <p>Description: {{this.ticket.description}}</p>
    <p>Date Created: {{this.ticket.dateCreated}}</p>
    <p>Time Created: {{this.ticket.timeCreated}}</p>
    <p>Ticket Status: {{this.ticket.ticketStatus}}</p>
    <p>Label: {{this.ticket.label}}</p>
    <p>Priority Status: {{this.ticket.priorityStatus}}</p>
    <p>Assigned To: {{this.ticket.assignedTo}}</p>
    <br />

    <form v-on:submit.prevent="assignUser">
      <label for="users_select">Assign a User to this ticket:</label>
      <select>
        <option v-for="user in users" :user="user">{{user.name}}</option>
      </select>
      <input type="submit" name="assign-user" value="Assign User" />
    </form>
    <br />
    <button v-on:click="deleteTicket">Delete Ticket</button>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "single-ticket",
  props: ["ticket", "users"],

  data() {
    return {
      // user: null
    };
  },

  methods: {
    deleteTicket: function() {
      eventBus.$emit("delete-ticket", this.ticket._id);
    },

    assignUser: function() {
      eventBus.$emit("assign-user", this.user.name);
    },
  }
};
</script>

<style>
</style>

<template>
  <div>
    <label for="name">Name Of Ticket:</label>
    <input type="text" id="name" name="name" v-model="this.ticket.name" required />
    <!-- <h2>Ticket name: {{this.ticket.name}}</h2> -->

    <p>Description: {{this.ticket.description}}</p>
    <p>Date Created: {{this.ticket.dateCreated}}</p>
    <p>Time Created: {{this.ticket.timeCreated}}</p>
    <p>Ticket Status: {{this.ticket.ticketStatus}}</p>
    <!-- <p>Label: {{this.ticket.label}}</p> -->
    <p>Priority Status: {{this.ticket.priorityStatus}}</p>
    <p :class="assignedTo">Assigned To: {{this.ticket.assignedTo}}</p>
    <br />

    <label for="users_select">Assign User:</label>
    <select id="user-select">
      <option v-for="user in users" :key="user.name">{{user.name}}</option>
    </select>
    <!-- <button v-on:click="updateTicket">Update Ticket</button> -->

    <br />
    <button v-on:click="deleteTicket">Delete Ticket</button>
    <button v-on:click="updateTicket">Update Ticket</button>
    <br />

    <h2 class="ticketUpdated" v-if="ticketUpdated">Ticket updated</h2>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "single-ticket",
  props: ["ticket", "users"],

  data() {
    return {
      assignedTo: {
        Type: String,
        default: this.ticket.assignedTo,
      },
      ticketUpdated: false,
    };
  },

  // computed: {
  //   assignedToUser() {
  //     return this.ticket.assignedTo;
  //   },
  // },

  methods: {
    deleteTicket: function () {
      eventBus.$emit("delete-ticket", this.ticket._id);
      eventBus.$emit("selected-page", "home");
    },

    updateTicket: function () {
      // console.log(this.ticket.assignedTo);
      const newUser = document.getElementById("user-select");
      const newUserName = newUser.options[newUser.selectedIndex].value;
    
      this.ticket.assignedTo = newUserName;
      eventBus.$emit("update-ticket", this.ticket);
      this.showUpdate();
    },

    showUpdate: function () {
      console.log("showUYpdate now please");
      this.ticketUpdated = true;
    },
  },
};
</script>

<style>
</style>

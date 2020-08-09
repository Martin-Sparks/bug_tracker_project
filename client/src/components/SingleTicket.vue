<template>
  <div>
    <label for="name">Name Of Ticket:</label>
    <input type="text" id="ticket-name" name="name" v-model="assignedTicketName.default" required />
    <!-- <h2>Ticket name: {{this.ticket.name}}</h2> -->
    <br />
    <!-- <p>Description: {{this.ticket.description}}</p> -->
    <label for="description">Description:</label>
    <input
      type="text"
      id="ticket-description"
      name="description"
      v-model="assignedTicketDescription.default"
      required
    />
    <p>Date Created: {{this.ticket.dateCreated}}</p>
    <p>Time Created: {{this.ticket.timeCreated}}</p>
    <!-- <p>Ticket Status: {{this.ticket.ticketStatus}}</p> -->
    <br>
    <label for="status">Ticket Status:</label>
    <input
      type="text"
      id="ticket-status"
      name="status"
      v-model="assignedTicketStatus.default"
      required
    />
    <br>
    <!-- <p>Label: {{this.ticket.label}}</p> -->
    <!-- <p>Priority Status: {{this.ticket.priorityStatus}}</p> -->
    <label for="priority">Priority Status:</label>
    <input
      type="text"
      id="ticket-priority"
      name="priority"
      v-model="assignedTicketPriority.default"
      required
    />
    <p :class="assignedTo">Assigned To: {{this.ticket.assignedTo}}</p>
    <br />
    <label for="users_select">Assign User:</label>
    <select id="user-select">
      <option v-for="user in users" :key="user.name">{{user.name}}</option>
    </select>
    <!-- <button v-on:click="updateTicket">Update Ticket</button> -->
    <br>
    <p>Project: {{this.ticket.project_name}}</p>
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
      assignedTicketName: {
        Type: String,
        default: this.ticket.name,
      },
      assignedTicketStatus: {
        Type: String,
        default: this.ticket.ticketStatus,
      },
      assignedTicketDescription: {
        Type: String,
        default: this.ticket.description,
      },
      assignedTo: {
        Type: String,
        default: this.ticket.assignedTo,
      },
      assignedTicketPriority: {
        Type: String,
        default: this.ticket.priorityStatus,
      },
      ticketUpdated: false,
    };
  },

  methods: {
    deleteTicket: function () {
      eventBus.$emit("delete-ticket", this.ticket._id);
      eventBus.$emit("selected-page", "home");
    },

    updateTicket: function () {
      // update assigned user
      const newUser = document.getElementById("user-select");
      const newUserName = newUser.options[newUser.selectedIndex].value;
      this.ticket.assignedTo = newUserName;

      // update ticket name
      const newName = document.getElementById("ticket-name");
      const newTicketName = newName.value;
      this.ticket.name = newTicketName;

      // update ticket description
      const newDescription = document.getElementById("ticket-description");
      const newTicketDiscription = newDescription.value;
      this.ticket.descrtiption = newTicketDiscription;

      // update ticket status
      const newStatus = document.getElementById("ticket-status");
      const newTicketStatus = newStatus.value;
      this.ticket.ticketStatus = newTicketStatus;

      // update ticket priority
      const newPriority = document.getElementById("ticket-priority");
      const newTicketPriority = newPriority.value;
      this.ticket.priorityStatus = newTicketPriority;

      //emit to the event bus on app
      eventBus.$emit("update-ticket", this.ticket);

      // show user there has been a change
      this.showUpdate();
    },

    showUpdate: function () {
      console.log("show Update now please");
      this.ticketUpdated = true;
    },
  },
};
</script>

<style>

</style>

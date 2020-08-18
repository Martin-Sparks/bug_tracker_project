<template>
  <div class="section panel">
    <b-field class="subtitle is-5" label for="name">Name Of Ticket:</b-field>
    <b-input type="text" id="ticket-name" name="name" v-model="assignedTicketName.default" required />
    <br />
    <b-field class="subtitle is-5" label for="description">Description:</b-field>
    <b-input
      type="text"
      id="ticket-description"
      name="description"
      v-model="assignedTicketDescription.default"
      required
    />
    <p class="subtitle is-5" >Date Created: {{this.ticket.dateCreated}}</p>
    <p class="subtitle is-5" >Time Created: {{this.ticket.timeCreated}}</p>
    <br>
    <label class="subtitle is-5" for="status">Ticket Status:</label>
    <b-input
      type="text"
      id="ticket-status"
      name="status"
      v-model="assignedTicketStatus.default"
      required
    />
    <br>
<b-field class="subtitle is-5" for="priorityStatus">Priority Status</b-field>
      <b-select v-model = assignedTicketPriority.default >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Urgent">Urgent</option>
      </b-select>



    <!-- <b-field class="subtitle is-5" label for="priority">Priority Status:</b-field>
    <b-input
      type="text"
      id="ticket-priority"
      name="priority"
      v-model="assignedTicketPriority.default"
      required
    /> -->
    <br>
    <p :class="assignedTo" class="subtitle is-5">Assigned To: {{this.ticket.assignedTo}}</p>
    <br />
    <b-field label for="users_select" class="subtitle is-5" >Assign User:</b-field>
    <b-select id="user-select">
      <option v-for="user in users" :key="user.name">{{user.name}}</option>
    </b-select>
    <br>
    <p class="subtitle is-5">Project: {{this.ticket.project_name}}</p>
    <br />
    
    <div class="buttons">
      <b-button class="is-success" v-on:click="deleteTicket">Delete Ticket</b-button>
      <b-button class="is-danger" v-on:click="updateTicket">Update Ticket</b-button>
    </div>
    <h2 class="ticketUpdated subtitle is-5" v-if="ticketUpdated" >Ticket updated</h2>
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

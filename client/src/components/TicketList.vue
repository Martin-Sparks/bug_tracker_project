<template lang="html">
  <div>
    <h2>List all Bug Tickets</h2>
    <div id="tickets-wrapper">
      <ul>
        <li v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" class="ticket-link" v-on:click="selectTicket(ticket.id)">Ticket name: {{ticket.name}}</li>
      </ul>
    </div>
      <div>
        <form>
          <!-- <select v-for="(users, index) in users" :key="index" :users="users" class="user-select"> {{users}} </select>  -->
          <select :users="users"></select> 
            </form>
      </div>
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";

export default {
  name: "TicketList",
  props: ["tickets", "users"],
  components: {
    "single-ticket": SingleTicket,
  },

  methods: {
    selectTicket(ticket) {
      eventBus.$emit("selected-ticket", ticket);
    }
  },
};
</script>

<style>

</style>
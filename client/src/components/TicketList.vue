<template lang="html">
  <div class="section panel">
    <h2 class="title is-4">List all tickets</h2>
      <div class="buttons">
        <b-button class="is-success" v-on:click="showUrgentTickets()" >Show Urgent Tickets</b-button>
        <b-button class="is-success" v-on:click="showMediumTickets()" >Show Medium Tickets</b-button>
        <b-button class="is-success" v-on:click="showLowTickets()" >Show Low Tickets</b-button>
        <b-button class="is-danger" v-on:click="showTickets()" >Show All Tickets</b-button>
      </div>

      
      <ul class="">
        <li class="" v-for="(ticket, index) in ticketsToDisplay" :key="index" :ticket="ticket"  v-on:click="selectTicket(ticket)">Ticket name: {{ticket.name }} </li>
      </ul>
  
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";
import { eventBus } from "@/main";

export default {
  name: "TicketList",
  props: ["tickets"],
  data() {
    return {
      priority: null,
    };
  },
  components: {
    "single-ticket": SingleTicket,
  },

  methods: {
    selectTicket(ticket) {
      eventBus.$emit("selected-ticket", ticket);
      eventBus.$emit("selected-page", "single-ticket");
    },
    showUrgentTickets() {
      this.priority = "Urgent";
    },
    showMediumTickets() {
      this.priority = "Medium";
    },
    showLowTickets() {
      this.priority = "Low";
    },
    showTickets() {
      this.priority = null;
    },
  },

  computed: {
   ticketsToDisplay() {
      if (this.priority == null) return this.tickets;
      else
        return this.tickets.filter((ticket) => {
          return ticket.priorityStatus == this.priority;
        });
    },
  },
};
</script>


<style scoped>

</style>
<template lang="html">
  <div class="ticket-list">
    <h2>List all tickets</h2>
    <div id="tickets-wrapper">
      <button v-on:click="showUrgentTickets()" >Show Urgent Tickets</button>
      <button v-on:click="showMediumTickets()" >Show Medium Tickets</button>
      <button v-on:click="showLowTickets()" >Show Low Tickets</button>
      <button v-on:click="showTickets()" >Show All Tickets</button>

      <ul>
       
            <li v-for="(ticket, index) in ticketsToDisplay" :key="index" :ticket="ticket" class="ticket-link" v-on:click="selectTicket(ticket)">Ticket name: {{ticket.name}}</li>

      </ul>

    </div>
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
li:hover {
  cursor: pointer;
}

.ticket-list {
  padding: 1rem;
  margin: 0;
}

#tickets-wrapper ul {
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}

.ticket-link {
  padding: 0.5rem 0;
}
</style>
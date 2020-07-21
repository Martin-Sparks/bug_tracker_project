<template lang="html">
  <div class="ticket-list">
    <h2>List all tickets</h2>
    <div id="tickets-wrapper">
      <ul>
        <li v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" class="ticket-link" v-on:click="selectTicket(ticket)">Ticket name: {{ticket.name}}
          </li>

           <h2> Filtered tickets </h2>
          
            <li v-for="(ticket, index) in ticketsToDisplay" :key="index" :ticket="ticket" class="ticket-link" v-on:click="filterUrgentTickets(ticket)">Ticket name: {{ticket.name}}
          </li>

      </ul>
      <button v-on:click="filterUrgentTickets()" >Toggle Urgent Tickets</button>

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
      urgentStatus: false,
      ticketsToDisplay: []
    };
  },
  components: {
    "single-ticket": SingleTicket
  },

  methods: {
    selectTicket(ticket) {
      eventBus.$emit("selected-ticket", ticket);
      eventBus.$emit("selected-page", "single-ticket");
    },
    filterUrgentTickets() {
      this.ticketsToDisplay = [];
      this.urgentStatus = !this.urgentStatus;
      if (this.urgentStatus == true)
        return (ticketsToDisplay = this.tickets.filter(function(ticket) {
          ticket.priorityStatus == "Urgent";
        }));
      else return tickets;
    }
  }
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
<template>
  <div id="app">
    <create-ticket/>
    <ticket-list :tickets="tickets" />
  </div>
</template>

<script>
import CreateTicket from "@/components/CreateTicket.vue";
import TicketList from "@/components/TicketList.vue";
import TicketService from "@/services/TicketService.js";
import { eventBus } from '@/main';

export default {
  name: "app",
  components: {
    "create-ticket": CreateTicket,
    "ticket-list": TicketList,
    // "single-ticket": SingleTicket,
  },
  data() {
    return {
      tickets: [],
    };
  },

  mounted() {
    this.fetchTickets();

    eventBus.$on("submit-ticket", (ticket) => {
      TicketService.addTicket(ticket)
      .then(ticketWithId => this.tickets.push(ticketWithId));
    });

    eventBus.$on("delete-ticket", (id) => {
      TicketService.deleteTicket(id);
      const index = this.tickets.findIndex(ticket => ticket._id === id);
      this.tickets.splice(index, 1);

    })
  },

  methods: {
    fetchTickets() {
      TicketService.getTickets().then((tickets) => (this.tickets = tickets));
    },

  },
};
</script>

<style></style>

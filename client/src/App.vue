<template>
  <div id="app">
    <!-- <TicketDisplay :tickets="tickets"></TicketDisplay> -->
  </div>
</template>

<script>
import CreateTicket from "@/components/CreateTicket.vue";
import TicketList from "@/components/TicketList.vue";
import SingleTicket from "@/components/SingleTicket.vue";
import TicketService from "@/services/TicketService.js";

export default {
  name: "app",
  data() {
    return {
      tickets: [],
    };
  },

  mounted() {
    this.fetchTickets();
  },

  methods: {
    fetchTickets() {
      TicketService.getTickets().then((tickets) => (this.tickets = tickets));
    },
  },
  components: {
    "create-ticket": CreateTicket,
    "ticket-list": TicketList,
    "single-ticket": SingleTicket,
  },
};
</script>

<style></style>

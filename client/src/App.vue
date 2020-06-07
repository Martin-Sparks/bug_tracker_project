<template>
  <div id="app">

    <!-- <p>{{tickets}}</p> -->
    <ticket-list :tickets="tickets" />
  </div>
</template>

<script>
import CreateTicket from "@/components/CreateTicket.vue";
import TicketList from "@/components/TicketList.vue";
import TicketService from "@/services/TicketService.js";

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
  },

  methods: {
    fetchTickets() {
      TicketService.getTickets().then((tickets) => (this.tickets = tickets));
    },
  },
};
</script>

<style></style>

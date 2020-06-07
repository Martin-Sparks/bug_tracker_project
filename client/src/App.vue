<template>
  <div>
    <TicketDisplay :tickets="tickets"></TicketDisplay>
  </div>
</template>

<script>
import TicketDisplay from "@/components/TicketDisplay.vue";
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
    "TicketDisplay": TicketDisplay,
  },
};
</script>

<style></style>

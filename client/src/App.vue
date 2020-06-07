<template>
  <div>
    <bug-main :tickets="tickets"></bug-main>
  </div>
</template>

<script>
import BugMain from "@/components/BugMain.vue";
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
    "bug-main": BugMain,
  },
};
</script>

<style></style>

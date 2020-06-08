<template>
  <div id="app">
    <create-ticket/>
    <!-- <p>{{tickets}}</p> -->

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
  
    eventBus.$on("submit-ticket", (tickts) =>{
      
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

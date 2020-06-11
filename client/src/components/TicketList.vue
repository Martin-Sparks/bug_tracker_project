<template lang="html">
  <div>
    <h2>List all Bug Tickets</h2>
    <div id="tickets-wrapper">
      <ul>
        <li v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" class="ticket-link" v-on:click="selectTicket(ticket)">Ticket name: {{ticket.name}}
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";
import { eventBus } from '@/main';

export default {
  name: "TicketList",
  props: ["tickets"],
  components: {
    "single-ticket": SingleTicket,

  },

  methods: {
    selectTicket(ticket) {  
      eventBus.$emit("selected-ticket", ticket);
      eventBus.$emit("selected-page", 'single-ticket');
      
    }
  },
};
</script>

<style scoped>
li:hover {
  cursor: pointer;
}

</style>
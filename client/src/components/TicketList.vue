<template lang="html">
  <div class="ticket-list">
    <h2>List all tickets</h2>
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

.ticket-list {
  padding:1rem;
  margin: 0;
}

#tickets-wrapper ul{
  padding:0;
  margin: 0;
  
}

li {
  margin:0;
}

.ticket-link{
  padding:0.5rem 0;
}


</style>
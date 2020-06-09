<template lang="html">
  <div>
    <h2>List all Bug Tickets</h2>
    <div id="tickets-wrapper">
      <ul>
        <li v-for="(ticket, index) in tickets" :key="index" :ticket="ticket">Ticket name: {{ticket.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";

export default {
  name: "TicketList",
  props: ["tickets"],
  components: {
    "single-ticket": SingleTicket,
  },
};
</script>

<style></style>

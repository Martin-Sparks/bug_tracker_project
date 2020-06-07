<template lang="html">
  <div>
    <h2>List all Bug Tickets</h2>
    <div id="tickets-wrapper">
      <single-ticket
        v-for="(ticket, index) in tickets"
        :key="index"
        :ticket="ticket"
      />
    </div>
  </div>
</template>

<script>
// import CreateTicket from "@/components/CreateTicket";
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

<template lang="html">
  <div class="section panel">
    <h2 class="title is-4" >Priority Tickets</h2>
      <ul>
        <li v-for="(ticket, index) in ticketsToDisplay" :key="index" :ticket="ticket" v-on:click="selectTicket(ticket)">Ticket name: {{ticket.name}}</li>
      </ul>

    
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";
import { eventBus } from "@/main";

export default {
  name: "PriorityList",
  props: ["tickets"],
  data() {
    return {
      priority: "Urgent",
    };
  },
  components: {
    "single-ticket": SingleTicket,
  },

  methods: {
    selectTicket(ticket) {
      eventBus.$emit("selected-ticket", ticket);
      eventBus.$emit("selected-page", "single-ticket");
    },
    showUrgentTickets() {
      this.priority = "Urgent";
    },
  },

  computed: {
   ticketsToDisplay() {
      if (this.priority == null) return this.tickets;
      else
        return this.tickets.filter((ticket) => {
          return ticket.priorityStatus == this.priority;
        });
     },
    },
}


</script>


<style scoped>

</style>
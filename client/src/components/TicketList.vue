<template lang="html">
  <div class="section">
    <h2>List all tickets</h2>
      <div class="buttons">
        <b-button class="is-success is-outlined" v-on:click="showUrgentTickets()" >Show Urgent Tickets</b-button>
        <b-button class="is-success is-outlined" v-on:click="showMediumTickets()" >Show Medium Tickets</b-button>
        <b-button class="is-success is-outlined" v-on:click="showLowTickets()" >Show Low Tickets</b-button>
        <b-button class="is-danger is-outlined" v-on:click="showTickets()" >Show All Tickets</b-button>
      </div>

      
      <ul class="">
        <li class="" v-for="(ticket, index) in ticketsToDisplay" :key="index" :ticket="ticket"  v-on:click="selectTicket(ticket)">Ticket name: {{ticket.name }} </li>
      </ul>

     
      

    
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";
import { eventBus } from "@/main";

export default {
  name: "TicketList",
  props: ["tickets"],
  data() {
    return {
      priority: null,
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
    showMediumTickets() {
      this.priority = "Medium";
    },
    showLowTickets() {
      this.priority = "Low";
    },
    showTickets() {
      this.priority = null;
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
};
</script>


<style scoped>
li:hover {
  cursor: pointer;
}

.ticket-list {
  padding: 1rem;
  margin: 0;
}

#tickets-wrapper ul {
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}

.ticket-link {
  padding: 0.5rem 0;
}

li{
  /* background-color: aqua; */
  margin: 0.25em 0.25em 1em;
  padding: 0.5em 0.5em 0.5em 1em;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

li:nth-child(even){
  background-color:white;
    /* box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02) */
}

li:hover {
  background: linear-gradient(to top, #ced4da 0%, #767676 100%);
  color:white;
  font-weight: 700;
}
</style>
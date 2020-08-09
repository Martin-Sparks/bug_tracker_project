<template>
  <div>
    <h2>Project name: {{this.project.project_name}}</h2>
    <p>Lead user: {{this.project.leadUser}}</p>

    <ul>
      <li
        v-for="(ticket, index) in ticketsToDisplay"
        :key="index"
        :ticket="ticket"
        class="ticket-link"
        v-on:click="selectTicket(ticket)"
      >Ticket name: {{ticket.name}}</li>
    </ul>
  </div>
</template>

<script>

import { eventBus } from "@/main";

export default {
  name: "single-project",
  props: ["project", "tickets"],

  data() {
    return {
      projectTickets: [],
    };
  },

  methods: {
    selectTicket(ticket) {
      eventBus.$emit("selected-ticket", ticket);
      eventBus.$emit("selected-page", "single-ticket");
    },
  },

  computed: {
    ticketsToDisplay() {
      return this.tickets.filter((ticket) => {
        return ticket.project_name == this.project.project_name;
      });
    },
  },
};
</script>

<style>
</style>
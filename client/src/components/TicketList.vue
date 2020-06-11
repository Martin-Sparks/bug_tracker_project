<template lang="html">
  <div>
    <h2>List all Bug Tickets</h2>
    <div id="tickets-wrapper">
      <ul>
        <li v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" class="ticket-link" v-on:click="selectTicket">Ticket name: {{ticket.name}}
          </li>
      </ul>
    </div>
      <div>
  
            <label for="users_select">Assign a User to this ticket:</label>
            <select >
              <option v-for="user in users" :value="user">{{user.name}}</option>
            </select>


      </div>
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";
import { eventBus } from '@/main';

export default {
  name: "TicketList",
  props: ["tickets", "users"],
  components: {
    "single-ticket": SingleTicket,

  },

  methods: {
    selectTicket() {  
      eventBus.$emit("selected-ticket", this.ticket);
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
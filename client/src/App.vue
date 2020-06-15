<template>
  <div id="app">
    <nav-bar></nav-bar>
    <create-ticket v-if="selectedPage === 'create-ticket'"></create-ticket>
    <ticket-list v-if="selectedPage === 'home'" :tickets="tickets"/>
    <new-user v-if="selectedPage === 'new-user'"></new-user>
    <single-ticket v-if="selectedPage === 'single-ticket'" :ticket="selectedTicket" :users="users"></single-ticket>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CreateTicket from "@/components/CreateTicket.vue";
import TicketList from "@/components/TicketList.vue";
import NewUser from "@/components/NewUser.vue";
import SingleTicket from "@/components/SingleTicket.vue";
import TicketService from "@/services/TicketService.js";
import UserService from "@/services/UserService.js";
import { eventBus } from "@/main";

export default {
  name: "app",
  components: {
    "create-ticket": CreateTicket,
    "ticket-list": TicketList,
    "new-user": NewUser,
    "nav-bar": NavBar,
    "single-ticket": SingleTicket
  },

  data() {
    return {
      tickets: [],
      users: [],
      selectedPage: "home",
      selectedTicket: null
    };
  },

  mounted() {
    this.fetchTickets();
    this.fetchUsers();

    eventBus.$on("selected-page", page => {
      this.selectedPage = page;
    });
    eventBus.$on("selected-ticket", ticket => {
      this.selectedTicket = ticket;
    });

  
    eventBus.$on("submit-ticket", ticket => {
      TicketService.addTicket(ticket).then(ticketWithId =>
        this.tickets.push(ticketWithId));
      });

      eventBus.$on("update-ticket", ticket => {
        const updatedTicket = ticket;

        TicketService.updateTicket(updatedTicket);
        const index = this.tickets.findIndex(ticket => ticket._id === updatedTicket._id)
        this.tickets.splice(index, 1, updatedTicket);
        
      });

    //   eventBus.$on('toggle-booking-checked-in', booking => {
    //   const updatedBooking = {
    //     ...booking,
    //     checked_in: !booking.checked_in
    //   };
    //   BookingService.updateBooking(updatedBooking);
    //   const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
    //   this.bookings.splice(index, 1, updatedBooking);
    // });



    eventBus.$on("delete-ticket", id => {
      TicketService.deleteTicket(id);
      const index = this.tickets.findIndex(ticket => ticket._id === id);
      this.tickets.splice(index, 1);
    });

    eventBus.$on("add-user", user => {
      UserService.addUser(user).then(userWithId => this.users.push(userWithId));
    });

    eventBus.$on("selected-ticket", ticket => {
      this.selectedTicket = ticket;
    });

  },

  methods: {
    fetchTickets() {
      TicketService.getTickets().then(tickets => (this.tickets = tickets));
    },

    fetchUsers() {
      UserService.getUsers().then(users => (this.users = users));
    }
  }
};
</script>


<style>

body {
font-family: 'Roboto', sans-serif;
}



</style>

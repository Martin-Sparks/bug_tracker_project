<template>
  <div class="section app-style app-height">
    <nav-bar class="container is-fluid app-style"></nav-bar>

    <div class="container tile is-12">
      <sidebar class="tile is-3 is-parent" :projects="projects"></sidebar>

      <div class="tile is-vertical is-parent">
        <create-ticket v-if="selectedPage === 'create-ticket'" :projects="projects" :users="users"></create-ticket>
        <create-project v-if="selectedPage === 'create-project'"></create-project>
        <new-user v-if="selectedPage === 'new-user'"></new-user>
        <single-ticket
          v-if="selectedPage === 'single-ticket'"
          :ticket="selectedTicket"
          :users="users"
        ></single-ticket>

        <single-project
          v-if="selectedPage === 'single-project'"
          :project="selectedProject"
          :tickets="tickets"
        ></single-project>

        <div class="tile subtitle is-12 is-child">
          <priority-list v-if="selectedPage === 'home'" :tickets="tickets" />
        </div>

        <div class="tile subtitle is-12 is-child">
          <ticket-list v-if="selectedPage === 'home'" :tickets="tickets" />
        </div>
      </div>
    </div>
    <footer-main class="container is-fluid app-style footer-style"></footer-main>
  </div>
</template>

<script>
import CreateProject from "@/components/CreateProject.vue";
import NavBar from "@/components/NavBar.vue";
import CreateTicket from "@/components/CreateTicket.vue";
import TicketList from "@/components/TicketList.vue";
import PriorityList from "@/components/PriorityList.vue";
import NewUser from "@/components/NewUser.vue";
import SingleTicket from "@/components/SingleTicket.vue";
import TicketService from "@/services/TicketService.js";
import UserService from "@/services/UserService.js";
import ProjectService from "@/services/ProjectService.js";
import ImgService from "@/services/ImgService.js";
import Sidebar from "@/components/SideBar.vue";
import SingleProject from "@/components/SingleProject.vue";
import { eventBus } from "@/main";
import FileUpload from "@/components/FileUpload.vue";
import FilePondTest from "@/components/FilePondTest.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: "app",
  components: {
    "create-ticket": CreateTicket,
    "ticket-list": TicketList,
    "priority-list": PriorityList,
    "new-user": NewUser,
    "nav-bar": NavBar,
    "single-ticket": SingleTicket,
    "create-project": CreateProject,
    sidebar: Sidebar,
    "single-project": SingleProject,
    fileupload: FileUpload,
    filepondtest: FilePondTest,
    "footer-main": FooterMain,
  },

  data() {
    return {
      tickets: [],
      users: [],
      projects: [],
      selectedPage: "home",
      selectedProject: null,
      selectedTicket: null,
    };
  },

  mounted() {
    this.fetchTickets();
    this.fetchUsers();
    this.fetchProjects();

    eventBus.$on("selected-page", (page) => {
      this.selectedPage = page;
    });
    eventBus.$on("selected-ticket", (ticket) => {
      this.selectedTicket = ticket;
    });
    eventBus.$on("selected-project", (project) => {
      this.selectedProject = project;
    });
    eventBus.$on("filter-urgent-tickets", (priorityStatus) => {
      this.selectedPriorityStatus = priorityStatus;
    });

    eventBus.$on("submit-ticket", (ticket) => {
      TicketService.addTicket(ticket).then((ticketWithId) =>
        this.tickets.push(ticketWithId)
      );
    });

    eventBus.$on("update-ticket", (ticket) => {
      const updatedTicket = ticket;

      TicketService.updateTicket(updatedTicket);
      const index = this.tickets.findIndex(
        (ticket) => ticket._id === updatedTicket._id
      );
      this.tickets.splice(index, 1, updatedTicket);
    });

    eventBus.$on("delete-ticket", (id) => {
      TicketService.deleteTicket(id);
      const index = this.tickets.findIndex((ticket) => ticket._id === id);
      this.tickets.splice(index, 1);
    });

    eventBus.$on("add-user", (user) => {
      UserService.addUser(user).then((userWithId) =>
        this.users.push(userWithId)
      );
    });

    eventBus.$on("selected-ticket", (ticket) => {
      this.selectedTicket = ticket;
    });

    eventBus.$on("submit-project", (project) => {
      ProjectService.addProject(project).then((projectWithId) =>
        this.projects.push(projectWithId)
      );
    });

    eventBus.$on("add-image", (imageData) => {
      console.log(imageData);
      ImgService.addImg(imageData);
    });
  },

  methods: {
    fetchTickets() {
      TicketService.getTickets().then((tickets) => (this.tickets = tickets));
    },

    fetchUsers() {
      UserService.getUsers().then((users) => (this.users = users));
    },

    fetchProjects() {
      ProjectService.getProjects().then(
        (projects) => (this.projects = projects)
      );
    },
  },
};
</script>


<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #bee3db;
$primary-invert: findColorInvert($primary);
$secondary: #ddd;
$secondary-invert: findColorInvert($secondary);
$button-primary: #ffd6ba;
$button-primary-invert: findColorInvert($button-primary);
$button-is-danger: #ff3860;
$button-is-success: #ffd6ba;
$button-is-danger-invert: #00c79f;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

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

li {
  margin: 0.25em 0.25em 1em;
  padding: 0.5em 0.5em 0.5em 1em;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
}

li:nth-child(even) {
  background-color: $secondary;
}

li:nth-child(odd) {
  background-color: white;
  /* box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02) */
}

li:hover {
  background: linear-gradient(to top, #ced4da 0%, #555b6e 100%);
  color: white;
  font-weight: 700;
}

.panel {
  background-color: $primary;
}

body {
  font-family: "Roboto", sans-serif;
}

.button.is-success {
  background-color: $button-primary;
  color: #000;
}

.button.is-success:hover {
  background-color: $button-primary-invert;
}

.button.is-danger:hover {
  background-color: $button-is-danger-invert;
  color: #000;
}

.app-style {
  background-color: lightslategrey;
}
.app-height {
  height: 100hv;
}

a.navbar-item:hover {
  background-color: lightslategrey;
     

}

a.navbar-item:focus {
  background-color: lightslategrey;
   color:#000;
}

.button.is-success:focus {
  color:#000;
}

a.navbar-item:focus-within {
  background-color: lightslategrey;
}

.footer-style {
  margin: 3vh 0 0 1vh;
}

.fill-screen-fix {
    margin: 300px 0 0 0;
}

// @import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

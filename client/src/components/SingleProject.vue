<template>
  <div>
    <h2>Project name: {{this.project.project_name}}</h2>
    <p>Lead user: {{this.project.leadUser}}</p>
    <ul>
      <li v-for="(ticket, index) in projectTickets" :key="index" :ticket="ticket"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "single-project",
  props: ["project", "tickets"],

  data() {
    return {
      projectTickets: [],
    };
  },
  computed: {
    findProjectTickets(tickets) {
    
      this.tickets.forEach(
        (ticket) => {
      
          if (ticket.project_name == this.project.project_name) {
            console.log(ticket.project_name + "ticket.project_name");
            console.log(Object.prototype.toString.call(ticket) + "ticket");
            projectTickets.push(ticket.project_name);
            console.log(projectTickets + "projectTickets");
            console.log("last line");
          }
          return this.projectTickets;
        }
        
      );
    },
  },
};
</script>

<style>
</style>
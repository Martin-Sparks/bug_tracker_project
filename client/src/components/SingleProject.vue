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
      projectTickets: []
    };
  },
  computed: {
    projectTickets() {
      for (let counter = 0; counter < tickets.length; counter++) {
        let currentTicket = tickets[i];
        if (currentTicket.project_name == project.project_name)
          projectTickets.push(currentTicket);
      }
      return projectTickets;
    }
  }
};
</script>

<style>

</style>
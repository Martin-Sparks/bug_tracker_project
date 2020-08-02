<template lang="html">
  <div>
    <h1>Create a new ticket</h1>
    <form v-on:submit.prevent="handleSubmit">
      <label for="project">Assign to Project</label>
      <select v-model="assignedToProject" id="assignedToProject">
        <option v-for="project in projects" :key="project" required>{{
          project.project_name
        }}</option>
      </select>
      <br />
      <label for="name"> Name Of Ticket:</label>
      <input type="text" id="name" name="name" v-model="name" required />
      <br />
      <label for="description">Description:</label>
      <input
        type="textarea"
        id="description"
        name="description"
        v-model="description"
        rows="4"
        cols="50"
        required
      />
      <br />
      <label for="dateCreated">Date Created:</label>
      <input
        type="date"
        selected=""
        id="dateCreated"
        name="dateCreated"
        v-model="dateCreated"
        required
      />
      <br />
      <label for="timeCreated">Time Created:</label>
      <input
        type="time"
        id="timeCreated"
        name="timeCreated"
        v-model="timeCreated"
        required
      />
      <br />
      <label for="ticketStatus">Ticket Status:</label>
      <input
        type=""
        id="ticketStatus"
        name="ticketStatus"
        v-model="ticketStatus"
        required
      />
      <!-- <br />
      <label for="label">Label</label>
      <input type="text" id="label" name="label" v-model="label" required /> -->
      <br />
      <label for="priorityStatus">Priority Status</label>
      <select v-model="priorityStatus">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <filepondtest v-model="photoUpload"> </filepondtest>
      <br />
      <label for="assignedToselect">Assign a User to this ticket:</label>
      <select v-model="assignedToselect" id="assignedToselect">
        <option v-for="user in users" :key="user">{{ user.name }}</option>
      </select>
      <input type="submit" name="submit" value="Save" />
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import ProjectService from "@/services/ProjectService.js";
import FilePondTest from "@/components/FilePondTest.vue";

export default {
  name: "CreateTicket",
  props: ["users", "projects"],
  components: {
    "filepondtest": FilePondTest,
  },
  data() {
    return {
      name: "",
      description: "",
      dateCreated: "",
      timeCreated: "",
      ticketStatus: null,
      label: "",
      priorityStatus: "",
      assignedToselect: null,
      assignedToProject: null,
      photoUpload: null,
    };
  },

  methods: {
    getTodaysDate: function() {
      today = new date().toISOString().substr(0, 10);
      document.querySelector("#dateCreated").value = today;
    },

    handleSubmit() {
      eventBus.$emit("submit-ticket", this.$data);
      this.name = this.description = this.dateCreated = this.timeCreated = this.label = this.priorityStatus =
        "";
      this.ticketStatus = null;
    },
  },
};
</script>

<style></style>

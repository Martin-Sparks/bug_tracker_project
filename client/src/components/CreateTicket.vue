<template lang="html">
  <div>
    <h1>Create a new ticket</h1>
    <form v-on:submit.prevent="handleSubmit">

      <b-field label for="project">Assign to Project</b-field>
      <b-select v-model="project_name" id="project_name">
        <option v-for="project in projects" :key="projects.project_name" required>{{
          project.project_name
        }}</option>
      </b-select>
      <br />
      <b-field label for="name"> Name Of Ticket:</b-field>
      <input type="text" id="name" name="name" v-model="name" required />
      <br />
      <b-field  for="description">Description:</b-field>
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
      <b-field label="Select a date...">
        <b-datepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          editable
          v-model="dateCreated"
          required>
        </b-datepicker>
      </b-field>
        <!-- type="date"
        selected=""
        id="dateCreated"
        name="dateCreated"
        v-model="dateCreated"
        required
      /> -->
   <template>
    <section>
        <b-field grouped group-multiline>
            <div class="control">
                <b-switch v-model="formatAmPm">AM/PM</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="enableSeconds">Enable seconds</b-switch>
            </div>
        </b-field>
        <b-field label="Select time">
            <b-timepicker
                rounded
                placeholder="Click to select..."
                icon="clock"
                :enable-seconds="enableSeconds"
                :hour-format="format"
                v-model="timeCreated">
            </b-timepicker>
        </b-field>
    </section>
</template>

      <br />
      <label for="ticketStatus">Ticket Status:</label>
      <input
        type=""
        id="ticketStatus"
        name="ticketStatus"
        v-model="ticketStatus"
        required
      />

      <br />
      <label for="priorityStatus">Priority Status</label>
      <select v-model="priorityStatus">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />

      <br />
      <label for="assignedToselect">Assign a User to this ticket:</label>
      <select v-model="assignedToselect" id="assignedToselect">
        <option v-for="user in users" :key="users.name">{{ user.name }}</option>
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
    filepondtest: FilePondTest,
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
      project_name: null,
      formatAmPm: false,
      enableSeconds: false,
    };
  },
  computed: {
    format() {
      return this.formatAmPm ? '12' : '24'
    }
  },


  methods: {
    getTodaysDate: function () {
      today = new date().toISOString().substr(0, 10);
      document.querySelector("#dateCreated").value = today;
    },

    handleSubmit() {
      eventBus.$emit("submit-ticket", this.$data);
      this.name = this.description = this.dateCreated = this.timeCreated = this.label = this.priorityStatus =
        "";
      this.ticketStatus = null;
      eventBus.$emit("selected-page", 'home');
    },
  },
};
</script>

<style></style>

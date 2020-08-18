<template lang="html">
  <div class="section panel">
    <h1 class="title is-4">Create a new ticket</h1>
    <form v-on:submit.prevent="handleSubmit">

      <b-field class="subtitle is-5" label for="project">Assign to Project</b-field>
      
      <b-select v-model="project_name" id="project_name" placeholder="Select project...">
        <option v-for="project in projects" :key="projects.project_name" required>{{
          project.project_name
        }}</option>
      </b-select>
      <br>
      
      <b-field class="subtitle is-5" label for="name"> Name Of Ticket:</b-field>
      <b-input type="text" id="name" name="name" v-model="name" required placeholder="Ticket name..."/>
      <br>
      <b-field class="subtitle is-5" for="description">Description:</b-field>
      <b-input
        type="textarea"
        id="description"
        name="description"
        v-model="description"
        rows="4"
        cols="50"
        placeholder="Enter your description..."
        required
      />
    
      <b-field class="subtitle is-5" label="Select a date...">
        <b-datepicker class="subtitle is-5"
          placeholder="Type or select a date..."
          icon="calendar-today"
          editable
          v-model="dateCreated"
          required>
        </b-datepicker>
      </b-field>

        <b-field grouped group-multiline>
            <!-- <div class="control">
                <b-switch v-model="formatAmPm">AM/PM</b-switch> -->
            <!-- </div> -->
            <!-- <div class="control">
                <b-switch v-model="enableSeconds">Enable seconds</b-switch> -->
            <!-- </div> -->
        </b-field>
        <b-field class="subtitle is-5"label="Select time">
            <b-timepicker
                rounded
                placeholder="Click to select..."
                icon="clock"
                :enable-seconds="enableSeconds"
                :hour-format="format"
                v-model="timeCreated">
            </b-timepicker>
        </b-field>
     <br>
      <label class="subtitle is-5" for="ticketStatus">Ticket Status:</label>
      <br>
      <b-input
        type=""
        id="ticketStatus"
        name="ticketStatus"
        v-model="ticketStatus"
        required
      />
      <br>

        <br>    
      <b-field class="subtitle is-5" for="priorityStatus">Priority Status</b-field>
      <b-select v-model="priorityStatus" placeholder="Low...">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Urgent">Urgent</option>
      </b-select>
     <br>
      <b-field class="subtitle is-5"label for="assignedToselect">Assign a User to this ticket:</b-field>
      <b-select v-model="assignedToselect" id="assignedToselect" placeholder="Assigned to...">
        <option v-for="user in users" :key="users.name">{{ user.name }}</option>
      </b-select>
      <br>
      <div class="buttons">

        <b-button class="is-danger" tag="input"
                native-type="submit"
                value="Submit Ticket" />
      </div>
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

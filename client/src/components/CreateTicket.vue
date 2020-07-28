<template lang="html">
  <div>
    <h1>Create a new ticket</h1>
    <form v-on:submit.prevent="handleSubmit" enctype="multipart/form-data">
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
      <br />
      <label for="label">Label</label>
      <input type="text" id="label" name="label" v-model="label" required />
      <br />
      <label for="priorityStatus">Priority Status</label>
      <select v-model="priorityStatus">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <div class="fields">
        <label>Upload File</label> <br />
        <input type="file" v-on:change="onAddFile" />
      </div>

      <br />
      <br />
      <label for="assignedToselect">Assign a User to this ticket:</label>
      <select v-model="assignedToselect" id="assignedToselect">
        <option v-for="user in users" :key="user">{{ user.name }}</option>
      </select>

      <input type="submit" name="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import ProjectService from "@/services/ProjectService.js";

export default {
  name: "CreateTicket",
  props: ["users", "projects"],
  components: {},
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
      file: null,
      upload: null,
    };
  },

  methods: {
    getTodaysDate: function() {
      today = new date().toISOString().substr(0, 10);
      document.querySelector("#dateCreated").value = today;
    },

    handleSubmit() {
      //       if (!files.length)
      //       return;
      //       this.ticket.image = files[0];
      this.$data.file = this.upload;
      eventBus.$emit("submit-ticket", this.$data);
      this.name = this.description = this.dateCreated = this.timeCreated = this.label = this.priorityStatus =
        "";
      this.ticketStatus = null;
      // this.file = null;
    },

    // onAddFile(event) {
    //   //  console.log(event);
    //   var upload = event.target.files[0];
    //   // console.log(event.target.files[0]);  
    //   // if (!upload.length) return;
    //     // console.log(this.$data);
    //     console.log(upload);
    //     // newData = upload.map()
    //   this.$data.file = upload;
    //   // this.$data.file = ('file', upload);
      

    //   // this.ticket.image = files[0];
    //   // eventBus.$emit('add-image', this.file);
    // },

        onAddFile(event){
       console.log(event);
      this.upload = event.target.files[0].data;
      // console.log(event.target.files[0]);  
      // if (!upload.length) return;
        // console.log(this.$data);
        // console.log(upload);
        // newData = upload.map()
      // this.$data.file = upload;
      // this.$data.file = ('file', upload);
      

      // this.ticket.image = files[0];
      // eventBus.$emit('add-image', this.file);
    },

      
    
  },
};
</script>

<style></style>

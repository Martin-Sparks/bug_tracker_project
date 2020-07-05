<template>
  <div>
      <h1>Create New Project</h1>
       <form v-on:submit.prevent="handleSubmitProject">
    <label for="name"> Name Of Project:</label>
    <input type="text" id="project_name" name="project_name" v-model="project_name"/>
      <br>
    <label for="leadUser">Lead User:</label>
    <input type="textarea" id="leadUser" name="leadUser" v-model="leadUser" rows="4" cols="50"/>
      <br>
      <input type="submit" name="submit" value="Save" />
    </form>
  </div>
</template>

<script>
import { eventBus } from '@/main';

export default {
    name: "CreateProject",
    components: {
    },
    data() {
        return {
          project_name: "",
          leadUser: ""
        };
    },

    methods: {

        handleSubmitProject(){
        eventBus.$emit('submit-project', this.$data);
        this.project_name = this.leadUser = "";
    
      }
    }
};
</script>

<style>

</style>
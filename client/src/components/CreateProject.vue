<template>
  <div>
      <h1>Create Project</h1>
       <form v-on:submit.prevent="handleSubmitProject">
        <b-field label for="name"> Name Of Project:</b-field>
        <b-input type="text" id="project_name" name="project_name" v-model="project_name"/>
      <br>
        <b-field label for="leadUser">Lead User:</b-field>
        <b-input type="text" id="leadUser" name="leadUser" v-model="leadUser"/>
      <br>
      <b-button tag="input"
                native-type="submit"
                value="Create project" />
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
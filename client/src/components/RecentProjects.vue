<template>
  <div>
      <h2>List all projects</h2>
      <div id="project-wrapper">
        <ul>
        <li v-for="(project, index) in projects" :key="index" :projects="projects" class="project-link" v-on:click="selectProject(project)">Project name: {{project.project_name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import { eventBus } from '@/main';

export default {
    name: "RecentProjects",
    props: ["projects"],
    components: {

},
data(){

},

methods: {
    selectProject(project) {  
      eventBus.$emit("selected-project", project);
      eventBus.$emit("selected-page", 'single-project');
    }
  },


}
</script>

<style>

</style>
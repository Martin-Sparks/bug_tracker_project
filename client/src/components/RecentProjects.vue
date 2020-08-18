<template>
  <div>
      <h1 class="subtitle is-4">Recent Projects</h1>
      <div id="project-wrapper">
        <ul>
        <li v-for="(project, index) in projects" :key="index" :projects="projects" class="project-link" v-on:click="selectProject(project)">Project: {{project.project_name}}</li>
        </ul>
      </div>
        <div class="is-hidden-mobile fill-screen-fix"></div>

  </div>
</template>

<script>
import { eventBus } from '@/main';

export default {
    name: "RecentProjects",
    props: ["projects"],
    components: {

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
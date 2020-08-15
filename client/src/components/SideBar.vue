<template>
  <div class="section">
      <recent-projects :projects="projects"></recent-projects>
  </div>
</template>

<script>

import RecentProjects from "@/components/RecentProjects";

export default {
  name: "Sidebar",
  props: ["projects"],
  components: {
    "recent-projects": RecentProjects,
  }
}


</script>

<style>

</style>

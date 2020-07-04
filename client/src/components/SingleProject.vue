<template>
  <div>
    <h2>Project name: {{this.project.project_name}}</h2>
    <p>Lead user: {{this.project.leadUser}}</p>
  </div>
</template>

<script>
export default {
    name: "single-project",
    props: ["project"]

}
</script>

<style>

</style>
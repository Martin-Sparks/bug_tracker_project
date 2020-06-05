<template>
  <div>
      <h1>Ticket name: {{tickets.legnth}}</h1>
  </div>
</template>

<script>
export default {
    name: "BugMain",
    props: ["tickets"],
    data: function() {
        return {
        }
    }
}
</script>

<style>

</style>
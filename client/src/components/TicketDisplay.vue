<template>
  <div>
      <h1>Ticket name: {{tickets}}</h1>
  </div>
</template>

<script>
export default {
    name: "TicketDisplay",
    props: ["tickets"],
    data: function() {
        return {
        }
    }
}
</script>

<style>

</style>
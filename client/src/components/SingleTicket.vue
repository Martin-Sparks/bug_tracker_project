<template>
  <div>
    <h2>Ticket name: {{ ticket }}</h2>
  </div>
</template>

<script>
// import TicketService from '@/services/TicketService';

export default {
  name: "single-ticket",
  props: ["ticket"],
};
</script>

<style></style>

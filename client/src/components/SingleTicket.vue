<template>
  <div>
    <p>Ticket name: {{ticket.name}}</p>
    <button v-on:click="deleteTicket">Delete Ticket</button>
    <select name="" id=""></select>
  </div>
</template>

<script>

import { eventBus } from '@/main';
export default {
  name: "single-ticket",
  props: ["ticket"],

    methods: {
        deleteTicket: function(){
        eventBus.$emit('delete-ticket', this.ticket._id);
        }
    },
};
</script>

<style></style>

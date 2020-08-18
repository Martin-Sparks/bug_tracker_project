<template>
  <b-navbar>
    
    <template slot="brand">
      <b-navbar-item>
        <p class="title is-4" v-on:click="selectedPage('home')" href="#">Bug Tracker</p>
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item>
        <b-button class="is-danger" v-on:click="selectedPage('create-ticket')" href="#">Create Ticket</b-button>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item>
        <b-button class="is-success" v-on:click="selectedPage('create-project')" href="#">Create Project</b-button>
      </b-navbar-item>

      <b-navbar-item>
        <b-button class="is-success" v-on:click="selectedPage('new-user')" href="#">Create User</b-button>
      </b-navbar-item>
    </template>

  </b-navbar>
</template>

<script>
    import { eventBus } from '@/main';

export default {
  name: 'nav-bar',
  methods: {
  selectedPage(page) {
    eventBus.$emit("selected-page", page);
    },
  },
}
</script>

<style>


</style>
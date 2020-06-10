<template>
  <div>
    <ul>
        <li v-on:click="selectedPage('home')" href="#">Home</li>
        <li v-on:click="selectedPage('new-project')" href="#">Create Project</li>
        <li v-on:click="selectedPage('create-ticket')" href="#">Create Ticket</li>
        <li v-on:click="selectedPage('new-user')" href="#">Create User</li>
    </ul>
  </div>
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
<template>
  <div class="nav-bar-container">
    <h1 class="nav-logo" v-on:click="selectedPage('home')" href="#">Bug Tracker</h1>
    
    <ul class="container">
        <li v-on:click="selectedPage('create-project')" href="#">Create Project</li>
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

.nav-bar-container {
  font-weight:600;
  display: flex; 
  cursor: pointer;
  padding: 0 1rem;
}

.container {  
  width:70%;
  display: flex; 
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
  background-color: #ddd;
  padding: 0;
}
li {
  list-style: none;
  font-weight: 400;
  /* text-transform: uppercase; */
  color: #555;
  padding: 0.7rem;
}
li:hover{
  font-weight: 700;
  color: #000;
}


.nav-logo{
    width: 30%;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
}




</style>
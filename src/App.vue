<template>
  <div id="app">
    <!-- Include the SurpriseComponent -->
    <SurpriseComponent />
  </div>
</template>

<script>
// Import the SurpriseComponent
import SurpriseComponent from './components/SurpriseComponent.vue';

export default {
  name: 'App',
  components: {
    SurpriseComponent // Register the component here
  }
};
</script>

<style>
/* Global styles can be added here */
</style>

<template>
  <div class="container">
    <LogList :log-entries="logs"></LogList>
    <SubmissionForm @submit="(entry) => logs.push(entry)"></SubmissionForm>
  </div>
</template>


<script setup>
import LogList from "./components/LogList.vue";
import SubmissionForm from "./components/SubmissionForm.vue";
import {ref} from "vue";

const logs = ref([
  {
    name: "Kasper",
    reps: 5,
    weightKg: 100,
    date: Date.now()
  }
])


</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
}

</style>
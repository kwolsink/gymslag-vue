<template>
  <div class="container">
    <LogList :log-entries="logEntries"></LogList>
    <SubmissionForm @submit="(entry) => logEntries.push(entry)"></SubmissionForm>
  </div>
</template>


<script setup>
import LogList from "./components/LogList.vue";
import SubmissionForm from "./components/SubmissionForm.vue";
import {ref} from "vue";

const logEntries = ref([])


</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
}

</style>
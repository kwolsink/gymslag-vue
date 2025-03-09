<template>
  <div class="container">
    <Title>Bench</Title>
    <LogList class="component" :log-entries="logEntries"></LogList>
    <SubmissionForm class="component" @submit="(entry) => logEntries.push(entry)"></SubmissionForm>
  </div>
</template>


<script setup>
import LogList from "./components/LogList.vue";
import SubmissionForm from "./components/SubmissionForm.vue";
import {ref} from "vue";
import Title from "./components/Title.vue";

const logEntries = ref([])


</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
}

.component {
  margin-bottom: 2em;
}


</style>
<template>
  <div class="container">
    <Title>Bench</Title>
    <div class="chart-container">
      <LogChart class="component chart" :log-entries="logEntries"></LogChart>
    </div>
    <LogList class="component" :log-entries="logEntries"></LogList>
    <SubmissionForm class="component" @submit="(entry) => logEntries.push(entry)"></SubmissionForm>
  </div>
</template>


<script setup>
import LogList from "./components/LogList.vue";
import SubmissionForm from "./components/SubmissionForm.vue";
import {ref} from "vue";
import Title from "./components/Title.vue";
import LogChart from "./components/LogChart.vue";

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

.chart-container {
  display: flex;
  justify-content: center;
}

.chart {
  max-width: 900px;
  max-height: 500px;
}



</style>
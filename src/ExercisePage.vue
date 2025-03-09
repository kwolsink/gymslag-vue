<template>
  <div class="container">
    <div class="component">
      <Button variant="outlined" @click="back()">
        Terug
      </Button>
    </div>
    <Title>{{ exercise }}</Title>
    <div class="chart-container">
      <LogChart class="component chart" :log-entries="logEntries"></LogChart>
    </div>
    <LogList class="component" :log-entries="logEntries"></LogList>
    <SubmissionForm class="component" @submit="(submission) => onSubmit(submission)"></SubmissionForm>
  </div>
</template>


<script setup>
import {Button} from "primevue";
import LogList from "./components/LogList.vue";
import SubmissionForm from "./components/SubmissionForm.vue";
import {ref} from "vue";
import Title from "./components/Title.vue";
import LogChart from "./components/LogChart.vue";
import {useRoute} from "vue-router";
import {router} from "./router.js";

function back() {
  router.back()
}

const route = useRoute();
const exercise = route.params.exercise;

const logEntries = ref([])

async function onSubmit(submission) {
  logEntries.value.push(submission)

  await fetch(`http://localhost:8080/exercise/${exercise}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(submission)
  })
}

(async function onLoad() {
  const response = await fetch(`http://localhost:8080/exercise/${exercise}`, {
    headers: {
      "Content-Type": "application/json"
    },
  })

  const entries = await response.json()

  logEntries.value = entries.map((entry) => {
    return {
      ...entry,
      date: new Date(entry.date)
    }
  })
})()

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
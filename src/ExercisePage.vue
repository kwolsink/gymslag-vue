<template>
  <div class="container">
    <div class="component">
      <Button variant="outlined" @click="back()">
        Terug
      </Button>
    </div>
    <Title>{{ exercise }}</Title>
    <div class="chart-container">
      <p class="info-message" v-if="!isBackendReady">De server is aan het opstarten, dit kan even duren...</p>
      <LogChart class="component chart" v-else-if="logEntries.length > 0" :log-entries="logEntries"></LogChart>
      <p class="info-message" v-else>Nog geen data</p>
    </div>
    <LogList class="component" :log-entries="logEntries"></LogList>
    <SubmissionForm :is-backend-ready="isBackendReady" class="component" @submit="(submission) => onSubmit(submission)"></SubmissionForm>
  </div>
</template>


<script setup>
import {Button, useToast} from "primevue";
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
const isBackendReady = ref(false)

const logEntries = ref([])

const toast = useToast()

const baseUrl = import.meta.env.VITE_API_BASE_URL

async function onSubmit(submission) {
  const response = await fetch(`${baseUrl}/exercise/${exercise}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(submission)
  })

  if (response.status > 299) {
    const errorBody = await response.json()

    toast.add({
      severity: "error",
      summary: "Er is iets mis gegaan",
      detail: errorBody.message,
      life: 7000
    })
  } else {
    logEntries.value.push(submission)
    toast.add({
      severity: "success",
      summary: "Sessie is succesvol toegevoegd",
      life: 7000
    })
  }
}

(async function onLoad() {
  // reset backend ready status
  isBackendReady.value = false

  const response = await fetch(`${baseUrl}/exercise/${exercise}`, {
    headers: {
      "Content-Type": "application/json"
    },
  })

  // Once we have fetched these entries, we can know the backend is ready
  isBackendReady.value = true

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

.info-message {
  font-style: italic;
}


</style>
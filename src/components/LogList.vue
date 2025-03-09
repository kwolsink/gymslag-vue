<script setup>
import {DataTable, Column} from "primevue"

const testData = [
  {
    name: "Kasper",
    reps: 5,
    weightKg: 100,
    projectedMax: 120,
    date: Date.now()
  }
]

</script>

<template>
  <DataTable :value="testData">
    <Column field="name" header="Naam"></Column>
    <Column field="reps" header="Reps"></Column>
    <Column field="weightKg" header="Gewicht"></Column>
    <Column field="projectedMax" header="Projected 1RM"></Column>
    <Column field="date" header="Datum"></Column>
  </DataTable>
</template>

<style scoped>

</style>
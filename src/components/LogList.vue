<script setup>
import {DataTable, Column} from "primevue"
import {computed} from "vue";
import {calculateOneRepMax} from "../model/functions.js";

const props = defineProps(
    {
      logEntries: Array
    }
)

const tableData = computed(() => {
  return props.logEntries.map(entry => {
    return {
      name: entry.name,
      weight: entry.weightKg + " kg",
      reps: entry.reps,
      projectedMax: calculateOneRepMax(entry.weightKg, entry.reps) + " kg",
      date: entry.date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).replace(',', '')
    }
  })
})

</script>

<template>
  <DataTable :value="tableData">
    <Column field="name" header="Naam"></Column>
    <Column field="weight" header="Gewicht"></Column>
    <Column field="reps" header="Reps"></Column>
    <Column field="projectedMax" header="Projected 1RM"></Column>
    <Column field="date" header="Datum"></Column>
  </DataTable>
</template>

<style scoped>

</style>
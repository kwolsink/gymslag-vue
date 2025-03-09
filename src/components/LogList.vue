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
      name: entry.lifter,
      weight: entry.weightInKg + " kg",
      reps: entry.reps,
      projectedMax: calculateOneRepMax(entry.weightInKg, entry.reps) + " kg",
      date: entry.date
    }
  })
})

</script>
<template>
  <DataTable :value="tableData" striped-rows paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
  <Column field="name" header="Naam"></Column>
    <Column field="weight" header="Gewicht"></Column>
    <Column field="reps" header="Reps"></Column>
    <Column field="projectedMax" header="Projected 1RM" :sortable="true"></Column>
    <Column field="date" header="Datum" :sortable="true">
      <template #body="{ data, field }">
        {{
          data[field].toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }).replace(',', '')
        }}
      </template>
    </Column>
  </DataTable>
</template>

<style scoped>

</style>
<script setup>
import {DataTable, Column} from "primevue"
import {computed} from "vue";

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
      projectedMax: "TODO",
      date: entry.date
    }
  })
})

// const testData = [
//   {
//     name: "Kasper",
//     reps: 5,
//     weightKg: 100,
//     projectedMax: 120,
//     date: Date.now()
//   }
// ]

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
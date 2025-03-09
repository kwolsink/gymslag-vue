<script setup>
import Chart from 'chart.js/auto'
import 'chartjs-adapter-luxon'
import {nextTick, watch} from "vue"
import {calculateOneRepMax} from "../model/functions.js"

const props = defineProps({
  logEntries: Array
})

watch(() => props.logEntries, async (logEntries) => {
  await nextTick()
  render(logEntries)
}, {deep: true});


function toChartData(logEntries) {
  logEntries.sort((a, b) => a.date - b.date)
  console.log(logEntries)
  const entriesByName = logEntries.reduce((map, entry) => {
    if (!map.has(entry.lifter)) {
      map.set(entry.lifter, []);
    }
    map.get(entry.lifter).push(entry);
    return map;
  }, new Map());

  const datasets = [...entriesByName].map((entry) => {

    return {
      label: entry[0],
      data: entry[1].map((entry) => {
        return {
          x: entry.date,
          y: calculateOneRepMax(entry.weightInKg, entry.reps)
        }
      })
    }
  })

  return {
    datasets: datasets
  }

}

let chart;

function render(logEntries) {
  if (chart !== undefined) {
    chart.destroy()
  }
  if (logEntries.length !== 0) {
    const ctx = document.getElementById("log-entries")
    chart = new Chart(ctx, {
      type: "line",
      data: toChartData(logEntries),
      options: {
        scales: {
          x: {
            type: 'time'
          }
        }
      }
    })
  }
}


</script>

<template>
  <canvas v-if="logEntries.length > 0" id="log-entries"></canvas>
  <p v-else>Nog geen data</p>
</template>

<style scoped>
p {
  font-style: italic;
}
</style>